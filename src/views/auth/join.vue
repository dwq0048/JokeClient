<template>
	<div class="join" :class="{ active : Wrong }">
		<div class="data">
			<form v-on:submit.prevent="Join">
				<div>
					<label class="decoration">
						<div>
							<h1>닉네임</h1>
							<div class="input" :class="{ active : Auth.name.wrong }">
								<input type="text" placeholder="12글자 이하, 특수문제 제외" ref="nameAuth" v-model="Auth.name.value">
							</div>
						</div>
					</label>
					<label class="decoration">
						<div>
							<h1>이메일</h1>
							<div class="input" :class="{ active : Auth.email.wrong }">
								<input type="text" placeholder="user@example.com" ref="emailAuth" v-model="Auth.email.value">
							</div>
						</div>
					</label>
					<label class="decoration">
						<div>
							<h1>비밀번호</h1>
							<div class="input" :class="{ active : Auth.password.wrong }">
								<input type="password" placeholder="********" ref="passwordAuth" v-model="Auth.password.value">
							</div>
						</div>
					</label>
					<label class="decoration">
						<div>
							<h1>비밀번호 확인</h1>
							<div class="input" :class="{ active : Auth.re_password.wrong }">
								<input type="password" placeholder="********" ref="re_passwordAuth" v-model="Auth.re_password.value">
							</div>
						</div>
					</label>
					<div class="condition">
						<div class="left">
							<ul>
								<li>
									<label>
										<input type="checkbox" v-model="Auth.agree.value">
										<div>
											<div>
												<i><font-awesome-icon :icon="faCheck" /></i>
											</div>
											<router-link to="#">이용약관</router-link>
											<span>과</span>
											<router-link to="#">개인정보 수집 및 이용</router-link>
											<span>내용을 이해하였고 동의합니다.</span>
										</div>
									</label>
								</li>
							</ul>
						</div>
						<div class="right">
							<ul>
								<li>
									<button type="button" @click="Active('Terms')" :class="{ active : Terms }">
										<div>
											<i><font-awesome-icon :icon="faChevronDown" /></i>
										</div>
									</button>
								</li>
							</ul>
						</div>
					</div>
					<div class="error" ref="join_error">
						<span></span>
					</div>
					<div class="terms" ref="terms" :class="{ active : Terms }">
						<div>
							<div>
								<h1>이용약관</h1>
								<div>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae beatae deleniti commodi libero iste accusamus incidunt, ut ipsam fugit nam, sed cupiditate natus? Nostrum est impedit maxime officia ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit perferendis atque odit sapiente totam, enim sequi, eum iusto ex hic asperiores dolorem nisi illo similique tempora magni error magnam! Nostrum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas hic sunt atque qui rerum, a inventore assumenda? Magnam quia corrupti temporibus? Consequuntur at eos repellendus esse? Qui numquam quisquam non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum vel ullam rem quisquam quod possimus ad praesentium, culpa, maiores voluptates velit rerum modi hic consectetur quis? Fugit, quasi saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptate, dignissimos quasi repellendus voluptatibus quod excepturi eveniet error, minus ex iusto? Ipsam odio qui velit tempore. Accusantium ratione ullam nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat adipisci magni repellendus aliquid provident earum cum, maiores aspernatur saepe reiciendis neque tempore possimus repudiandae quaerat dignissimos sunt corrupti? Temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident tempora ipsam, debitis quisquam enim dignissimos delectus harum reprehenderit a repudiandae quas ut error aut perspiciatis, excepturi sed voluptas dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit laboriosam necessitatibus aperiam consectetur aspernatur non modi, quas beatae voluptate nisi. Itaque nihil odit eaque soluta architecto laborum obcaecati error vel!
								</div>
							</div>
							<div>
								<h1>개인정보 수집 및 이용</h1>
								<div>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ipsum quia ad officia accusantium dolores! Error tenetur cum culpa placeat dignissimos impedit recusandae, magnam assumenda, reiciendis possimus adipisci dolore ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, corporis? Repellendus fugiat quod quis nisi? Ea quaerat quidem, ipsum vitae, at id fugit nihil hic aspernatur sed non dolorum odit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor ad magnam iure sed sapiente nisi eius voluptates, eum, sequi quos minus facilis unde tempore ex fugit suscipit molestias! Id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, iste, voluptas deserunt fuga amet nihil provident aspernatur, animi dolores iusto dolor voluptate distinctio optio architecto dolorem necessitatibus. Inventore, ab qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam qui dolor commodi assumenda in, ut totam quis impedit quaerat nostrum laboriosam sit deserunt eius facilis quae perspiciatis doloribus consequatur dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. In excepturi fugiat repellendus dolorum reprehenderit tempora hic deserunt atque beatae totam. Dolor quasi eveniet animi consequuntur, voluptas dicta. Optio, molestias et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat ex repellat, eveniet labore dolor magnam voluptatum ea beatae earum adipisci quam saepe odio necessitatibus laboriosam iure exercitationem veniam cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium expedita quasi quidem distinctio voluptatum? Fuga aperiam explicabo maiores provident ratione, repellendus illum, nostrum iure ea mollitia nisi blanditiis earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam dolores, molestias dolore quos dolor quidem? Commodi laudantium architecto adipisci et reiciendis, qui ea mollitia repudiandae, tenetur magni, hic ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias modi placeat voluptates quae incidunt totam maiores qui ullam. Vel laboriosam reiciendis natus blanditiis quae quis ea aliquid vitae. Alias? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptas, adipisci autem dolor quam reiciendis beatae dolorem illum ipsum sequi molestias fugit necessitatibus deleniti suscipit reprehenderit consectetur ipsa itaque quaerat.
								</div>
							</div>
						</div>
					</div>
					<div class="submit">
						<button type="submit">
							<div>
								<span>회원가입</span>
							</div>
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
	name : 'join',
	data(){
		return {
			// Icons
			faCheck, faChevronDown,

			// Variables
			Terms : false,
			Wrong : false,
			Auth : {
				name : { value : '', wrong : false },
				email : { value : '', wrong : false },
				password : { value : '', wrong : false },
				re_password : { value : '', wrong : false },
				agree : { value : false, wrong : false },
			}
		}
	},
	methods : {
		...mapActions('userStore', ['USER_JOIN']),
		Active(data){
			try{
				this[data] = (this[data]) ? false : true;
				if(this.Terms){
					const Inner = this.$refs['terms'].querySelector('div');
					this.$refs['terms'].style.height = getComputedStyle(Inner).height;
				}else{
					this.$refs['terms'].style.height = '';
				}
			}catch(e){
				console.log(e);
			}
		},
		Join(){
			const data = { fs : new FormData(), data : this.Auth };
			data.fs.append('USER_NAME', this.Auth.name.value);
			data.fs.append('USER_EMAIL', this.Auth.email.value);
			data.fs.append('USER_PASSWORD', this.Auth.password.value);
			data.fs.append('USER_RE_PASSWORD', this.Auth.re_password.value);
			data.fs.append('USER_AGREE', this.Auth.agree.value);

			this.USER_JOIN(data).then((req) => {
				if(typeof req.data.status == 'string'){
					if(req.data.status == 'success'){
						alert('회원가입 완료');
						this.$router.push({ path : '/auth/login' });
					}
				}
			}).catch((err) => {
				this.JoinError({ message : err.message, model : err.model });
			});
		},
		JoinError({ message, model }){
			if(!message || message == undefined){ message = '알 수 없는 오류입니다.' };
			this.Wrong = false;
			this.Wrong = true;
			this.$refs['join_error'].querySelector('span').innerText = message;
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
	.join {
        & {
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
							padding-bottom: 15px;
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
											outline: none; cursor: pointer;
										}

										& > div {
											& {
												display: block;
												font-size: 0;
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

											& > a {
												& {
													display: inline-block;
													vertical-align: middle;
													font-size: #{$font-size};
													line-height: 1;
													color: #1877f2;
													text-decoration: none;
													padding-left: 5px;
												}
												
												&:hover {
													& {
														text-decoration: underline;
													}
												}

												&:nth-child(1){
													& {
														padding-left: 0;
													}
												}
											}

											& > span {
												& {
													display: inline-block;
													vertical-align: middle;
													font-size: #{$font-size};
													line-height: 1;
													color: #2c3e50;
													padding-left: 5px;
												}

												&:nth-child(1){
													& {
														padding-left: 0;
													}
												}
											}
										}

										& > input {
											& {
												display: none;
											}

											&:checked ~ div {
												& > div {
													& > i {
														& {
															opacity: 1;
															@include transition(.2s all);
														}
													}
												}
											}
										}

										&:hover {
											& > div {
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

									& > button {
										& {
											position: relative;
											display: block;
											outline: none; cursor: pointer;
											background: none; border: 0;
											padding: 0; margin: 0;
											font-size: 0;
										}

										& > div {
											& > span {
												& {
													display: inline-block;
													vertical-align: middle;
													font-size: #{$font-size};
													color: #2c3e50;
													line-height: 1;
												}
											}

											& > i {
												& {
													display: inline-block;
													vertical-align: middle;
													font-size: #{$font-size};
													color: #2c3e50;
													line-height: 1;
													@include transform(rotate(0deg));
													@include transition(.2s all);
												}
											}
										}

										&.active {
											& > div {
												& > i {
													& {
														@include transform(rotate(180deg));
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

					& > .error {
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

					& > .terms {
						& {
							display: block;
							width: 100%; height: 0px;
							overflow: hidden;
							@include transition(.2s all);
						}

						& > div {
							& {
								display: block;
								width: 100%; height: auto;
							}

							& > div {
								& > h1 {
									& {
										display: block;
										font-size: #{$font-size + 4};
										font-weight: bold;
										line-height: 1;
										letter-spacing: 1px;
										padding: 0; margin: 0;
										padding-bottom: 15px;
										color: #2c3e50;
									}
								}

								& > div {
									& {
										width: 100%; height: 150px;
										border: 1px solid #ddd;
										border-radius: 2px;
										background-color: #f9f9f9;
										margin-bottom: 25px;
										padding: 5px 10px;
										overflow-y: scroll;
										font-size: #{$font-size};
										color: #2c3e50;
										white-space: initial;
										line-height: 1.5;
									}
								}
							}
						}

						&.active {
							& {
								@include transition(.2s all);
							}
						}
					}

					& > .submit {
						& {
							padding-top: 15px;
						}

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
		}

		& > div {
			& {
				display: block;
				width: 100%; height: auto;
				padding-bottom: 15px;
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
