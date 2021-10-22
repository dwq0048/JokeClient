import Store from '../../store';
//import VueCookies from "vue-cookies";

// 나중에 VueCookies 없애고 하기

const Before = (object) => async (to, from, next) => {
	const Certification = () => {
		return new Promise((resolve, reject) => {
			Store.dispatch('userStore/USER_SECURITY').then((req) => {
				//const UID = VueCookies.get('GUEST_UD');
				if(req.state == 'issued'){
					/*
					if(sessionStorage){
						sessionStorage.setItem('GUEST_UD', UID) 
					};
					if(localStorage){
						localStorage.setItem('GUEST_UD', UID)
					};
					*/
					resolve({ state : 'issued' });
				}else if(req.state  == req.state){
					resolve({ state : req.state });
				}else{
					reject('err');
				}
			}).catch((err) => {
				if(typeof err.state == 'string'){
					// UUID 에러일 경우
					if(err.state == 'uuid'){
						Store.dispatch('userStore/USER_SECURITY_RESET', { storage : true }).then(() => {
							Store.dispatch('userStore/USER_SECURITY').then(() => {
								//const UUID = VueCookies.get('GUEST_UD');
								/*
								if(sessionStorage){
									sessionStorage.setItem('GUEST_UD', UUID);
								};
								if(localStorage){
									localStorage.setItem('GUEST_UD', UUID);
								};
								*/
								resolve({ state : '?' });
							}).catch(() => {
								reject('err');
							})
						}).catch(() => {
							reject('err');
						});
					}else if(err.state == 'err'){
						reject('err');
					}
				}else{
					reject('err');
				}
			});
		});
	};

	await Certification().catch(() => {
		Store.dispatch('userStore/USER_SECURITY_RESET', { storage : true });
	});
	next();
}

export default Before;
