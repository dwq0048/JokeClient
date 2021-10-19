<template>
	<div class="news-header">
		<div class="top">
			<div>
				<div class="left">
					<div class="logo">
						<router-link to="/">
							<span>Joke</span>
						</router-link>
					</div>
					<div class="navigation">
						<ul>
							<li v-for="(item, i) in TopNav" :key="i">
								<router-link to="#">
									<div>
										<span>{{ item.ko }}</span>
									</div>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="right" v-if="!GET_INFO.IS_LOGIN">
					<div class="user">
						<button type="button">
							<router-link to="/auth/login">
								<span>로그인</span>
							</router-link>
						</button>
					</div>
					<div class="menu">
						<button type="button">
							<div>
								<div>
									<i><font-awesome-icon :icon="faBars" /></i>
								</div>
							</div>
						</button>
					</div>
				</div>
				<div class="right" v-else>
					<ul>
						<li>
							<router-link to="/post">
								<div>
									<i><font-awesome-icon :icon="faEdit" /></i>
								</div>
							</router-link>
							<div class="help">
								<span>글쓰기</span>
							</div>
						</li>
						<li>
							<button type="button">
								<div>
									<i><font-awesome-icon :icon="faBell" /></i>
								</div>
							</button>
							<div class="help">
								<span>알림</span>
							</div>
						</li>
					</ul>
					<div class="header_login" :class="{ active : Active.bar }">
						<button type="button" @click="onActive('bar')" ref="BarButton">
							<div>
								<div>
									<div>
										<div>

										</div>
									</div>
								</div>
								<div>
									<i><font-awesome-icon :icon="faSortDown" /></i>
								</div>
							</div>
						</button>
						<div class="pop">
							<div>
								<div class="profile">
									<div class="left">
										<div>

										</div>
									</div>
									<div class="right">
										<ul>
											<li>
												<div>
													<b>누구누구</b>
													<span>님</span>
												</div>
											</li>
											<li>
												<div>
													<span>소속 : 프리랜서</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div class="def-nav">
									<ul>
										<li v-for="(item, i) in PopNav" :key="i">
											<router-link :to="item.to" v-if="item.type == 'link'">
												<div>
													<i><font-awesome-icon :icon="item.icon" /></i>
													<span>{{ item.ko }}</span>
												</div>
											</router-link>
											<button type="button" v-if="item.type == 'button'" @click="item.to">
												<div>
													<i><font-awesome-icon :icon="item.icon" /></i>
													<span>{{ item.ko }}</span>
												</div>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div>
				<div class="left">
					<div class="navigation">
						<ul>
							<li>
								<router-link to="#">
									<div>
										<span>뉴스 홈</span>
									</div>
								</router-link>
							</li>
							<li v-for="(item, i) in BottomNav" :key="i">
								<router-link to="#">
									<div>
										<span>{{ item.ko }}</span>
									</div>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="right">
					<div class="search">
						<div>
							<div class="input">
								<input type="text" placeholder="가짜 검색">
							</div>
							<button type="button">
								<div>
									<i><font-awesome-icon :icon="faSearch" /></i>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { faBars, faSearch, faSortDown, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit, faBell, faIdCard } from '@fortawesome/free-regular-svg-icons'

export default {
	name : 'NewsHeader',
	data(){
		return {
			// Icons
			faBars, faSearch, faSortDown, faEdit, faBell, faIdCard, faCogs, faSignOutAlt,

			// Variables
			TopNav : [
				{ ko : '뉴스' },
				{ ko : '날씨' },
				{ ko : '언론사' }
			],
			BottomNav : [
				{ ko : '정치' },
				{ ko : '스포츠' },
				{ ko : '글로벌' },
				{ ko : '게임' },
				{ ko : '연애' }
			],
			PopNav : [
				{ ko : '내 프로필', icon : faIdCard, type : 'link', to : '#' },
				{ ko : '설정', icon : faCogs, type : 'link', to : '/setting' },
				{ ko : '로그아웃', icon : faSignOutAlt, type : 'button', to : this.USER_LOGOUT }
			],
			Active : {
				bar : false
			}
		}
	},
	computed: mapGetters('userStore', ['GET_INFO']),
	methods: {
		...mapActions('userStore', ['USER_LOGOUT']),
		onActive(data){
			console.log(this.Active[data]);
			(this.Active[data]) ? this.Active[data] = false : this.Active[data] = true;
			console.log(this.Active[data]);
		},
		onClick($event){
            const element = document.activeElement;
			console.log(element);
			const Ref = { button : this.$refs['BarButton'] };
			if(element != Ref.button){
				let clickTarget = false;
				if(typeof $event.path == 'object'){
					for(let i=0;i<$event.path.length;i++){
						try{
							if($event.path[i].classList.contains('header_login')){
								clickTarget = true;
								break;
							}
						}catch(e){}
					}
				}
				this.Active['bar'] = (clickTarget) ? true : false;
			}
		}
	},
	created(){
		console.log(this.GET_INFO);
	},
	mounted(){
        window.addEventListener('click', this.onClick);
	},
    beforeDestroy() {
        window.removeEventListener('click', this.onClick);
	}
}
</script>

<style lang="scss" scoped>
	.news-header {
		& {
			display: block;
			width: 100%; min-width: 900px; height: auto;
			z-index: 100;
		}

		/* Top */
		& > .top {
			& {
				display: block;
				width: 100%; height: auto;
				background-color: #3f63bf;
			}

			& > div {
				& {
					display: table;
					width: 100%; max-width: $wrap; height: 55px;
					margin: 0 auto;
					font-size: 0;
				}

				& > .left {
					& {
						display: table-cell;
						vertical-align: middle;
						width: 100%; height: auto;
						font-size: 0;
					}

					& > .logo {
						& {
							display: inline-block;
							vertical-align: middle;
							font-weight: bold;
						}

						& > a {
							& {
								display: inline-block;
								vertical-align: middle;
								text-decoration: none;
								font-size: 0;
							}

							& > span {
								& {
									display: block;
									font-family: UO, $fontDF;
									font-size: #{$font-size + 8};
									letter-spacing: 4px;
									line-height: 1;
									color: #fff;
								}
							}
						}
					}

					& > .navigation {
						& {
							display: inline-block;
							vertical-align: middle;
							padding-left: 15px;
						}

						& > ul {
							& {
								display: block;
								width: auto; height: 100%;
								margin: 0; padding: 0;
								list-style: none;
							}

							& > li {
								& {
									position: relative;
									display: inline-block;
									width: auto; height: 100%;
								}

								&:after {
									& {
										content: " ";
										display: block;
										position: absolute;
										width: 2px; height: 100%;
										left: 0; top: 50%;
										border-radius: 5px;
										background-color: #375cb9;
										@include transform(translateY(-50%));
									}
								}

								& > a {
									& {
										display: block;
										text-decoration: none;
										font-size: #{$font-size + 3};
										font-weight: bold;
										padding: 0 15px;
										line-height: 0;
										color: rgba(255,255,255,0.7);
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
						white-space: nowrap;
						width: auto; height: auto;
						text-align: right;
						font-size: 0;
					}

					& > ul {
						& {
							display: inline-block;
							vertical-align: middle;
							padding: 0; margin: 0;
							list-style: none;
							font-size: 0;
							white-space: nowrap;
							padding-right: 10px;
						}

						& > li {
							& {
								position: relative;
								display: inline-block;
								padding: 0 5px;
							}

							& > button, & > a {
								& {
									display: block;
									outline: none; cursor: pointer;
									background: none; border: 0;
									padding: 0; margin: 0;
									font-size: 0;
									text-decoration: none;
								}

								& > div {
									& {
										display: block;
										position: relative;
										width: 45px; height: 45px;
									}

									& > i {
										& {
											position: absolute;
											display: inline-block;
											vertical-align: middle;
											left: 50%; top: 50%;
											font-size: #{$font-size};
											color: #eee;
											line-height: 0;
											letter-spacing: 0;
											@include transform(translate(-50%, -50%) scale(1));
											@include transition(.2s all);
										}
									}
								}

								&:hover {
									& > div {
										& > i {
											& {
												color: #fff;
												@include transform(translate(-50%, -50%) scale(1.1));
												@include transition(.2s all);
											}
										}
									}
								}
							}

							& > .help {
								& {
									position: absolute;
									top: 100%; left: 0;
									z-index: 10;
									opacity: 0;
									visibility: hidden;
									@include transition(.2s all);
								}

								& > span {
									& {
										display: block;
										position: relative;
										font-size: #{$font-size - 2};
										padding: 7px 15px;
										color: #fff;
										border-radius: 3px;
										background-color: rgba(0,0,0,0.7);
									}

									&:after {
										content: " ";
										display: block;
										position: absolute;
										bottom: 100%; left: 20px;
										width: 0; height: 0;
										border-top: 5px solid transparent;
										border-right: 5px solid transparent;
										border-bottom: 5px solid rgba(0,0,0,0.7);
										border-left: 5px solid transparent;
									}
								}
							}

							&:hover, &:focus {
								& > .help {
									& {
										opacity: 1;
										visibility: visible;
										@include transition(.2s all);
									}
								}
							}
						}
					}

					& > .header_login {
						& {
							position: relative;
							display: inline-block;
							vertical-align: middle;
							padding-right: 15px;
						}

						& > div.pop {
							& {
								display: block;
								position: absolute;
								right: 0; top: 100%;
								z-index: 1;
								padding-top: 10px;
								padding-right: 5px;
								opacity: 0;
								visibility: hidden;
								@include transform(translateY(-50%));
								@include transition(.2s all);
							}

							& > div {
								& {
									display: block;
									position: relative;
									width: 250px; height: auto;
									background-color: rgba(255,255,255,0.8);
									border: 1px solid #ddd;
									border-radius: 5px;
									@include box-shadow(1px 1px 1px rgba(0,0,0,0.1));
								}

								&:after {
									& {
										content: " ";
										display: block;
										position: absolute;
										right: 20px; bottom: 100%;
										//background-color: black;
										width: 0; height: 0;
										border-top: 7px solid transparent;
										border-right: 7px solid transparent;
										border-bottom: 7px solid rgba(255,255,255,0.8);
										border-left: 7px solid transparent;
									}
								}

								& > .profile {
									& {
										display: table;
										width: 100%; height: auto;
										font-size: 0;
										padding: 10px;
									}

									& > .left {
										& {
											display: table-cell;
											vertical-align: middle;
											white-space: nowrap;
										}

										& > div {
											& {
												display: block;
												position: relative;
												width: 45px; height: auto;
												background-color: #333;
												border-radius: 3px;
											}

											&:after {
												& {
													content: " ";
													display: block;
													width: 100%; height: auto;
													padding-bottom: 100%;
												}
											}
										}
									}

									& > .right {
										& {
											display: table-cell;
											vertical-align: middle;
											width: 100%; height: auto;
											padding-left: 10px;
										}

										& > ul {
											& {
												display: block;
												width: 100%; height: auto;
												margin: 0; padding: 0;
												list-style: none;
												font-size: 0; 
												text-align: left;
											}

											& > li {
												& {
													display: block;
													padding: 4px 0;
												}

												&:nth-child(1){
													& {
														padding-top: 0;
													}
												}

												& > div {
													& {
														font-size: #{$font-size - 1};
													}

													& > button {
														& {
															display: block;
															outline: none; cursor: pointer;
															background: none; border: 0;
															padding: 0; margin: 0;
															font-size: 0;
														}

														& > div {
															& {
																display: block;
																padding: 4px 20px;
																border: 1px solid #ddd;
																background-color: #f1f1f1;
																border-radius: 2px;
															}

															& > span {
																& {
																	display: inline-block;
																	vertical-align: middle;
																	line-height: 1;
																	font-size: #{$font-size - 4};
																	color: #666;
																	
																}
															}
														}
													}

													& > b {
														& {
															display: inline-block;
															vertical-align: middle;
															line-height: 1;
														}
													}

													& > span {
														& {
															display: inline-block;
															vertical-align: middle;
															line-height: 1;
														}
													}
												}
											}
										}
									}
								}

								& > .def-nav {
									& > ul {
										& {
											display: block;
											width: 100%; height: auto;
											padding: 0; margin: 0;
											font-size: 0;
											list-style: none;
											text-align: left;
											border-top: 1px solid #ddd;
										}

										& > li {
											& {
												display: block;
												width: 100%; height: auto;
											}

											& > a, & > button {
												& {
													display: block;
													width: 100%; height: auto;
													outline: none; cursor: pointer;
													background: none; border: 0;
													padding: 0; margin: 0;
													padding: 15px 18px;
													text-align: left;
													text-decoration: nowrap;
													background-color: transparent;
													@include transition(.2s all);
												}

												& > div {
													& {
														display: block;
														position: relative;
													}

													& > i {
														& {
															display: block;
															position: absolute;
															left: 0px; top: 50%;
															color: #999;
															font-size: #{$font-size - 1};
															@include transform(translateY(-50%));
														}
													}

													& > span {
														& {
															display: inline-block;
															vertical-align: middle;
															font-weight: normal;
															color: #333;
															font-size: #{$font-size - 1};
															padding-left: 30px;
														}
													}
												}

												&:hover, &:focus {
													& {
														background-color: rgba(0,0,0,0.1);
														@include transition(.2s all);
													}
												}
											}
										}
									}
								}
							}
						}

						& > button {
							& {
								display: block;
								width: auto; height: 100%;
								outline: none; cursor: pointer;
								background: none; border: 0;
								padding: 0; margin: 0;
							}

							& > div {
								& {
									display: table;
									width: auto; height: 100%;
									font-size: 0;
								}

								& > div:nth-child(1){
									& {
										display: table-cell;
										vertical-align: middle;
									}

									& > div {
										& {
											display: block;
											position: relative;
											width: 30px; height: 30px;
											background-color: #333;
											border-radius: 50%;
										}
									}
								}

								& > div:nth-child(2){
									& {
										display: table-cell;
										vertical-align: middle;
										padding-left: 10px;
									}

									& > i {
										& {
											display: block;
											font-size: #{$font-size};
											color: #fff;
											line-height: 0;
											letter-spacing: 0;
											margin-bottom: 5px;
											@include transition(.1s all);
										}
									}
								}
							}

							&:hover {
								& > div {
									& > div:nth-child(2){
										& > i {
											& {
												margin-bottom: 0;
												@include transition(.1s all);
											}
										}
									}
								}
							}
						}

						&.active {
							& > div {
								& {
									visibility: visible;
									opacity: 1;
									@include transform(translateY(0));
									@include transition(.2s all);
								}
							}
						}
					}

					& > .user {
						& {
							display: inline-block;
							vertical-align: middle;
							padding-right: 25px;
						}

						& > button {
							& {
								display: block;
								outline: none; cursor: pointer;
								background: none; border: 0;
								padding: 0; margin: 0;
								border: 1px solid #375cb9;
								background-color: rgba(255,255,255,0.1);
								border-radius: 2px;
								overflow: hidden;
							}

							& > a {
								& {
									display: block;
									padding: 5px 15px;
									text-decoration: none;
									font-size: 0;
								}

								& > span {
									& {
										display: inline-block;
										vertical-align: middle;
										line-height: 1;
										font-size: #{$font-size - 2};
										color: #fff;
									}
								}
							}
						}
					}

					& > .menu {
						& {
							display: inline-block;
							vertical-align: middle;
							border-left: 2px solid #375cb9;
							border-right: 2px solid #375cb9;
						}

						& > button {
							& {
								display: block;
								position: relative;
								width: 54px; height: auto;
								padding: 0; margin: 0;
								border: 0; background: none;
								cursor: pointer; outline: none;
							}

							&:after {
								content: " ";
								display: block;
								width: 100%; height: auto;
								padding-bottom: 100%;
							}

							& > div {
								& {
									display: block;
									display: table;
									position: absolute;
									width: 54px; height: 54px;
									font-size: 0;
								}

								& > div {
									& {
										display: table-cell;
										vertical-align: middle;
									}

									& > span {
										& {
											display: inline-block;
											vertical-align: middle;
											padding-right: 5px;
											font-size: #{$font-size + 2};
											color: #fff;
										}
									}

									& > i {
										& {
											display: inline-block;
											vertical-align: middle;
											font-size: #{$font-size + 8};
											color: rgba(255,255,255,0.8);
										}
									}
								}
							}
						}
					}
				}
			}
		}
		/* Top End */

		/* Bottom */
		& > .bottom {
			& {
				display: block;
				width: 100%; height: auto;
				border-bottom: 1px solid #ddd;
				background-color: #fff;
				@include box-shadow(1px 1px 1px rgba(0,0,0,0.1));
			}

			& > div {
				& {
					display: table;
					width: 100%; max-width: $wrap; height: 45px;
					margin: 0 auto;
					font-size: 0;
				}

				& > .left {
					& {
						display: table-cell;
						vertical-align: middle;
						width: 100%; height: auto;
						text-align: left;
					}

					& > .navigation {
						& {
							display: inline-block;
							vertical-align: middle;
						}

						& > ul {
							& {
								display: block;
								margin: 0; padding: 0;
								white-space: nowrap;
								list-style: none;
								font-size: 0;
								margin-left: -15px;
							}

							& > li {
								& {
									display: inline-block;
									vertical-align: middle;
								}

								& > a {
									& {
										display: block;
										text-decoration: none;
										font-size: 0;
										line-height: 1;
										padding: 0 15px;
									}

									& > div {
										& > span {
											& {
												display: inline-block;
												vertical-align: middle;
												font-size: #{$font-size};
												font-weight: bold;
												letter-spacing: 1px;
												color: #2c3e50;
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
						white-space: nowrap;
					}

					& > .search {
						& {
							display: inline-block;
							vertical-align: middle;
						}

						& > div {
							& {
								display: table;
								width: 250px; height: 27px;
								border: 1px solid #ddd;
								background-color: #f9f9f9;
								border-radius: 2px;
								overflow: hidden;
								@include box-shadow(1px 1px 1px rgba(0,0,0,0.1));
							}

							& > .input {
								& {
									display: table-cell;
									vertical-align: middle;
								}

								& > input {
									& {
										display: block;
										outline: none; cursor: text;
										background: none; border: 0;
										padding: 0; margin: 0;
										width: 100%; height: 100%;
										font-size: #{$font-size - 2};
										padding: 0 10px;
									}

									&::placeholder {
										& {
											color: #aaa;
											font-weight: bold;
										}
									}
								}
							}

							& > button {
								& {
									display: table-cell;
									vertical-align: middle;
									outline: none; cursor: pointer;
									background: none; border: 0;
									padding: 0; margin: 0;
									white-space: nowrap;
								}

								& > div {
									& {
										display: block;
										position: relative;
										width: 27px; height: 27px;
									}

									& > i {
										& {
											position: absolute;
											display: inline-block;
											left: 50%; top: 50%;
											font-size: #{$font-size - 4};
											letter-spacing: 0;
											line-height: 0;
											color: #3f63bf;
											@include transform(translate(-50%, -50%));
										}
									}
								}
							}
						}
					}
				}
			}
		}
		/* Bottom End */
	}

	
	@media screen and (max-width: 1229px) {
		.news-header {
			& > .top {
				& > div {
					& {
						padding-left: 15px;
					}

					& > .right {
						& > .login {
							& {
								padding-right: 15px;
							}
						}
					}
				}
			}

			& > .bottom {
				& > div {
					& {
						padding: 0 15px;
					}
				}
			}
		}
	}
</style>
