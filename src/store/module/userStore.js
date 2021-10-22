import axios from 'axios';
import VueCookies from "vue-cookies";
import FingerprintJS from '@fingerprintjs/fingerprintjs'

const fpPromise = FingerprintJS.load();

const User = {
	namespaced: true,
	state: {
		USER_INFO : {
			IS_LOGIN : false,
			INFO : {}
		},
		USER_UD : false,
	},
	getters: {
		GET_INFO: state => state.USER_INFO,
		GET_UD: state => state.USER_UD
	},
	mutations: {
		SET_INFO(state, payload){
			state.USER_INFO = {
				IS_LOGIN : true,
				INFO : payload
			};
		},
		SET_INFO_RESET(state){
			state.USER_INFO = {
				IS_LOGIN : false,
				INFO : {}
			};
		},
		SET_UD(state, payload){
			state.USER_UD = payload;
		}
	},
	actions: {
        // 회원가입
        USER_JOIN: function({commit}, { fs, data }){
			const Reg = {
                Special : /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,
                Email : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
            };

			const Message = (data) => {
				switch(data){
					// 닉네임 오류
					case 'Name Empty':
						return { status : 'fail', message : '닉네임을 입력해주세요.', model : 'name' };
					case 'Name Length':
						return { status : 'fail', message : '닉네임 글자수를 확인해주세요.', model : 'name' };
					case 'Name Spacial':
						return { status : 'fail', message : '특수문자가 포함되어 있습니다.', model : 'name' };
					case 'Name Same':
						return { status : 'fail', message : '동일한 닉네임이 있습니다.', model : 'name' };
					// 이메일 오류
					case 'Email Empty':
						return { status : 'fail', message : '이메일을 입력해주세요.', model : 'email' };
					case 'Email Special':
						return { status : 'fail', message : '이메일 형식을 맞춰주세요.', model : 'email' };
					case 'Email Same':
						return { status : 'fail', message : '동일한 이메일이 있습니다.', model : 'email' };
					// 비밀번호 오류
					case 'Password Empty':
						return { status : 'fail', message : '비밀번호를 입력해주세요.', model : 'password' };
					case 'Password Length':
						return { status : 'fail', message : '6글자 이상 입력해주세요', model : 'password' };
					// 비밀번호 확인 오류
					case 'RePassword Error':
						return { status : 'fail', message : '비밀번호가 동일하지 않습니다.', model : 're_password' };
					// 정보 동의 오류
					case 'Agree Empty':
						return { status : 'fail', message : '약관에 동의 해주세요.', model : 'agree' };
					default:
						return { status : 'fail', message : '알 수 없는 오류입니다.', model : undefined }
				}
			};

            return new Promise((resolve, reject) => {
				// 닉네임 오류
				if(!data.name.value || data.name.value == ""){ reject(Message('Name Empty')) };
				if(data.name.value.length < 2 || data.name.value.length > 12){ reject(Message('Name Length')) };
				if(Reg.Special.test(data.name.value)){ reject(Message('Name Spacial')) };

				// 이메일 오류
				if(!data.email.value || data.email.value == ""){ reject(Message('Email Empty')) };
				if(!Reg.Email.test(data.email.value)){ reject(Message('Email Special')) };

				// 비밀번호 오류
				if(!data.password.value || data.password.value == ""){ reject(Message('Password Empty')) };
				if(data.password.value.length < 6){ reject(Message('Password Length')) };

				// 비밀번호 확인 오류
				if(data.re_password.value != data.password.value){ reject(Message('RePassword Error')) };

				// 정보 동의 오류
				if(!data.agree.value){ reject(Message('Agree Empty')) };

                axios({
                    method: 'post',
                    url: '/api/v1/auth/join',
                    data: fs,
					withCredentials : true
                }).then((req) => {
					if(req.data.status == 'fail'){
						reject(Message(req.data.message)); 
					}else{
						resolve(req);
					}
                }).catch(() => {
                    reject(Message(undefined)); 
                });
            });
        },
		USER_LOGIN: function({commit}, { fs, data }){
			const Message = (data) => {
				switch(data){
					// 이메일 오류
					case 'Email Empty':
						return { status : 'fail', message : '이메일을 입력해주세요.', model : 'email' };
					case 'Email Wrong':
						return { status : 'fail', message : '이메일 형식을 맞춰주세요.', model : 'email' };
					// 비밀번호 오류
					case 'Password Empty':
						return { status : 'fail', message : '비밀번호를 입력해주세요.', model : 'password' };
					case 'Password Wrong':
						return { status : 'fail', message : '6글자 이상 입력해주세요', model : 'password' };
					// 서버 오류
					case 'User Wrong':
						return { status : 'fail', message : '아이디 또는 비밀번호가 틀렸습니다.', modle : 'email' };
					default:
						return { status : 'fail', message : '알 수 없는 오류입니다.', model : undefined }
				}
			};

			return new Promise((resolve, reject) => {
				if(!data.email.value || data.email.value == ""){ reject(Message('Email Empty')) };
				if(!data.password.value || data.password.value == ""){ reject(Message('Password Empty')) };

				axios({
					method: 'post',
					url: '/api/v1/auth/login',
					data: fs,
					withCredentials : true
				}).then((req) => {
					if(req.data.status == 'fail'){
						reject(Message(req.data.message)); 
					}else{
						commit('SET_INFO', req.data.user);
						resolve(req);
					}
                }).catch(() => {
                    reject(Message(undefined)); 
                });
			});
		},
		USER_SECURITY: async function({commit, state}){
			const fp = await fpPromise;
			const result = await fp.get();
			const visitorId = result.visitorId;

			const UID = VueCookies.get('GUEST_UD');
			const object = {
				'cookie' : (navigator.cookieEnabled) ? true : false,
				'visitorId' : visitorId
			};

			return new Promise((resolve, reject) => {
				axios({
					method: 'post',
					url: `/api/v1/auth/security`,
					data: object,
					withCredentials: true,
				}).then((req) => {
					if(req.data.issued){
						// UUID 발급 받았을 떄
						commit('SET_UD', UID);
						resolve({ state : 'uuid' });
					}else if(req.data.status == "success"){
						let isToken = false;
						commit('SET_UD', UID);
						// 토큰이 있을 경우
						if(typeof req.data.user == 'object'){
							if(typeof req.data.user.info == 'object' && typeof req.data.user.meta == 'object'){
								isToken = true;
								commit('SET_INFO', req.data.user);
							}
						}
						resolve({ state : 'success', token : isToken });
					}else if(req.data.status == "noToken"){
						commit('SET_INFO_RESET');
					}else{
						// 모든게 에러
						reject({ state : 'err' });
					}
				}).catch(() => {
					reject({ state : false });
				});
			});
		},
		USER_SECURITY_RESET: function({commit}, state){
			return new Promise((resolve, reject) => {
				if(typeof state.storage == 'boolean'){
					if(state.storage){
						if(sessionStorage){
							sessionStorage.removeItem('GUEST_UD');
						}
						if(localStorage){
							localStorage.removeItem('GUEST_UD');
						}
						VueCookies.remove('GUEST_UD');
					}
				}
				commit('SET_INFO_RESET');
				resolve('success');
			});
		},
		USER_LOGOUT: function({commit}){
			return new Promise((resolve, reject) => {
				axios({
					method: 'post',
					url: `/api/v1/auth/logout`,
					withCredentials : true,
				}).then(() => {
					commit('SET_INFO_RESET');
					resolve('success');
				}).catch((err) => {
					reject(err);
				})
			});
		},
	}
}

export default User
