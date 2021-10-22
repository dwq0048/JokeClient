<template>
	<div class="login" :class="{ active : Wrong }">
		<div class="data">
			<form v-on:submit.prevent="Login">
				<div>
					<label class="decoration">
						<div>
							<h1>이메일</h1>
							<div class="input" :class="{ active : Auth.email.wrong }">
								<input type="text" placeholder="user@example.com" v-model="Auth.email.value" ref="emailAuth">
							</div>
						</div>
					</label>
					<label class="decoration">
						<div>
							<h1>비밀번호</h1>
							<div class="input" :class="{ active : Auth.password.wrong }">
								<input type="password" placeholder="********" v-model="Auth.password.value" ref="passwordAuth">
							</div>
						</div>
					</label>
					<div class="condition">
						<div class="left">
							<ul>
								<li>
									<label>
										<div>
											<div class="checkbox">
												<input type="checkbox" v-model="Auth.auto.value">
												<div>
													<i><font-awesome-icon :icon="faCheck" /></i>
												</div>
											</div>
											<span>자동 로그인</span>
										</div>
									</label>
								</li>
							</ul>
						</div>
						<div class="right">
							<ul>
								<li>
									<router-link to="/auth/join">
										<div>
											<span>비밀번호가 뭐였지?</span>
										</div>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="error" ref="login_error">
						<span></span>
					</div>
					<div class="submit">
						<button type="submit">
							<div>
								<span>로그인</span>
							</div>
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { mapActions, mapGetters } from 'vuex'
import VueCookies from "vue-cookies";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const fpPromise = FingerprintJS.load();

export default {
	name : 'login',
	data(){
		return {
			// Icons
			faCheck,

			// Variables
			Wrong : false,
			Auth : {
				email : { value : '', wrong : false },
				password : { value : '', wrong : false },
				auto : { value : false },
			}
		}
	},
	methods : {
		...mapActions('userStore', ['USER_LOGIN']),
		async Login(){
			const fp = await fpPromise;
			const result = await fp.get();
			const visitorId = result.visitorId;

			const data = { fs : new FormData(), data : this.Auth };
			data.fs.append('USER_EMAIL', this.Auth.email.value);
			data.fs.append('USER_PASSWORD', this.Auth.password.value);
			data.fs.append('cookie', (navigator.cookieEnabled) ? true : false);
			data.fs.append('visitorId', visitorId);

			this.USER_LOGIN(data).then((req) => {
				this.$router.push({ path : '/' });
			}).catch((err) => {
				console.log(err);
				this.LoginError({ message : err.message, model : err.model });
			});
		},
		LoginError({ message, model }){
			if(!message || message == undefined){ message = '알 수 없는 오류입니다.' };
			this.Wrong = false;
			this.Wrong = true;
			this.$refs['login_error'].querySelector('span').innerText = message;
			for (const item in this.Auth) {
				this.Auth[item].wrong = (model == item) ? true : false;
			};
			try{ this.$refs[`${model}Auth`].focus() }catch{};
			setTimeout(()=>{ this.Wrong = false },501);
		}
	}
}
</script>

<style lang="scss" scoped>
	.login {
		& {
			position:relative;
			display: inline-block;
            vertical-align: top;
			width: 100%;
		}
		
		& > .data {
			& > form {
				& {
					display: block;
					outline: none;
					font-size: 0;
					padding: 0; margin: 0;
				}

				& > div {
					& > .condition {
						& {
							display: table;
							width: 100%; height: auto;
							font-size: 0;
							padding-top: 10px;
						}
						
						& > .left {
							& {
								display: table-cell;
								vertical-align: middle;
								text-align: left;
							}

							& > ul {
								& {
									display: block;
									list-style: none;
									margin: 0; padding: 0;
									white-space: nowrap;
								}

								& > li {
									& {
										display: inline-block;
										vertical-align: middle;
									}

									& > label {
										& {
											display: block;
											font-size: 0;
											outline: none;
											cursor: pointer;
										}

										& > div {
											& > div.checkbox {
												& {
													display: inline-block;
													vertical-align: middle;
												}

												& > div {
													& {
														position: relative;
														display: inline-block;
														vertical-align: middle;
														width: 14px; height: 14px;
														border: 1px solid #ddd;
														border-radius: 2px;
														background-color: #fff;
														@include box-shadow(0px 0px 0px rgba(0,0,0,0.1));
														@include transition(.2s all);
													}

													& > i {
														& {
															position: absolute;
															left: 50%; top: 50%;
															line-height: 0;
															letter-spacing: 0;
															font-size: #{$font-size - 4};
															color: #2c3e50;
															opacity: 0;
															@include transform(translate(-50%, -50%));
															@include transition(.2s all);
														}
													}
												}

												& > input {
													& {
														display: none;
													}

													&:checked ~ div {
														& > i {
															& {
																opacity: 1;
																@include transition(.2s all);
															}
														}
													}
												}
											}

											& > span {
												& {
													display: inline-block;
													vertical-align: middle;
													padding-left: 10px;
													line-height: 1;
													font-size: #{$font-size};
													color: #2c3e50;
												}
											}
										}

										&:hover {
											& > div {
												& > .checkbox {
													& > div {
														& {
															@include box-shadow(1px 1px 1px rgba(0,0,0,0.1));
															@include transition(.2s all);
														}
													}
												}
											}
										}
									}
								}
							}
						}

						& > .right {
							& {
								display: table-cell;
								vertical-align: middle;
								text-align: right;
							}

							& > ul {
								& {
									display: block;
									list-style: none;
									margin: 0; padding: 0;
									white-space: nowrap;
								}

								& > li {
									& {
										display: inline-block;
										vertical-align: middle;
									}

									& > a {
										& {
											display: block;
											font-size: #{$font-size};
											color: #aaa;
											text-decoration: none;
											@include transition(.2s all);
										}

										&:hover {
											& {
												color: #999;
												@include transition(.2s all);
											}
										}
									}
								}
							}
						}
					}

					& > .error {
						& {
							padding : 15px 0;
						}

						& > span {
							& {
								display: block;
								font-size: #{$font-size - 2};
								line-height: 1;
								letter-spacing: 1px;
								color: #da5454;
							}
						}
					}

					& > .submit {
						& > button {
							& {
								display: block;
								width: 100%; height: 42px;
								outline: none; cursor: pointer;
								background: none; border: 0;
								padding: 0; margin: 0;
								background-color: #1877f2;
								border-radius: 3px;
							}

							& > div {
								& {
									font-size: 0;
								}

								& > span {
									& {
										display: inline-block;
										vertical-align: middle;
										font-size: #{$font-size + 2};
										color: #fff;
									}
								}
							}
						}
					}
				}
			}
		}

		&.active {
			& {
				animation-duration: .5s;
				animation-name: nono;
			}
		}
	}

	.decoration {
		& {
			display: block;
			width: 100%; height: auto;
			padding-bottom: 15px;
		}

		& > div {
			& {
				display: block;
				width: 100%; height: auto;
			}

			& > h1 {
				& {
					display: block;
					font-size: #{$font-size + 2};
					font-weight: bold;
					color: #2c3e50;
					padding-bottom: 10px;
					cursor: pointer;
				}
			}

			& > .input {
				& {
					width: 100%; height: 38px;
				}

				& > input {
					& {
						display: block;
						width: 100%; height: 100%;
						outline: none;
						background: none; border: 0;
						padding: 0; margin: 0;
						padding: 0 15px;
						background-color: #fff;
						border: 1px solid #ddd;
						border-radius: 3px;
						letter-spacing: 1px;
						line-height: 1;
						font-size: #{$font-size};
						@include box-shadow(1px 1px 3px rgba(0,0,0,0.1));
						@include transition(.2s all);
					}

					&:focus {
						& {
							@include box-shadow(1px 1px 1px rgba(0,0,0,0.2));
							@include transition(.2s all);
						}
					}

					&::placeholder {
						& {
							font-size: #{$font-size - 1};
						}
					}
				}

				&.active {
					& > input {
						& {
							border: 1px solid #da5454;
							@include transition(.2s all);
						}
					}
				}
			}
		}
	}
</style>
