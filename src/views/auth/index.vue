<template>
	<div class="auth">
		<div>
			<div class="bounce">
				<div class="title">
					<div class="left">
						<router-link to="/" title="홈으로">
							<div>
								<span>JOKE NEWS</span>
							</div>
						</router-link>
					</div>
					<div class="right">
						<ul>
							<li>
								<router-link to="/auth/login" :class="{ active : ($route.path == '/auth/login') ? true : false }">
									<div>
										<span>로그인</span>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/auth/join" :class="{ active : ($route.path == '/auth/join') ? true : false }">
									<div>
										<span>회원가입</span>
									</div>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="intro" ref="intro">
					<router-view v-slot="{ Component, route }">
						<transition :name="'fade'" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
							<component :is="Component" :key="route.path" />
						</transition>
					</router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Helper from '@/store/helper'

export default {
	name : 'auth',
	data(){
		return {
			// Variables
			prevHeight: 0,
		}
	},
	methods : {
		beforeLeave(element) {
			this.prevHeight = getComputedStyle(element).height;
		},
		enter(element) {
			const { height } = getComputedStyle(element);
			this.$refs['intro'].style.height = this.prevHeight;
			setTimeout(() => {
				element.style.height = height;
			},200);
		},
		afterEnter(element) {
			this.$refs['intro'].style.height = getComputedStyle(element).height;
			setTimeout(() => {
				this.$refs['intro'].style.height = '';
			},200);
		},
	},
	mounted(){
		Helper.Bounce();
	}
}
</script>

<style lang="scss" scoped>

	.fade-leave-to, .fade-leave-active {
		position: absolute;
		animation-duration: .2s;
		animation-name: left;
	}

	.fade-enter-to, .fade-enter-active {
		position: absolute;
		animation-duration: .2s;
		animation-name: right;
	}

	@keyframes left {
		0% { left: 0; opacity: 1; };
		100% { left: -100%; opacity: 0; };
	}

	@keyframes right {
		0% { left: 100%; opacity: 0; };
		100% { left: 0%; opacity: 1; };
	}

	.auth {
		& {
			position: absolute;
			left: 0; top: 0; right: 0; bottom: 0;
			clear: both;
		}

		& > div {
			& {
				display: table;
				width: 480px; min-height: 100%;
				margin: 0 auto;
			}
			& > div {
				& {
					display: table-cell;
					vertical-align: middle;
				}

				& > .title {
					& {
						display: table;
						width: 100%; height: auto;
						padding-bottom: 30px;
					}

					& > .left {
						& {
							display: table-cell;
							vertical-align: middle;
							width: 100%; height: auto;
						}

						& > a {
							& {
								display: block;
								text-decoration: none;
								font-size: #{$font-size + 26};
								font-weight: bold;
								color: #2c3e50;
								line-height: 1;
							}

							& > div {
								& > span {
									& {
										font-family: UO, $fontDF;
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
							text-align: right;
						}
						
						& > ul {
							& {
								display: block;
								width: 100%; height: auto;
								list-style: none;
								margin: 0; padding: 0;
								font-size: 0;
							}

							& > li {
								& {
									display: inline-block;
									vertical-align: middle;
									padding-right: 15px;
								}

								&:nth-last-child(1){
									& {
										padding-right: 0;
									}
								}

								& > a {
									& {
										display: block;
										text-decoration: none;
										color: #aaa;
									}

									& > div {
										& > span {
											& {
												display: inline-block;
												vertical-align: middle;
												font-size: #{$font-size};
												font-weight: bold;
											}
										}
									}

									&.active {
										& {
											color: #2c3e50;
										}
									}
								}
							}
						}
					}
				}

				& > .intro {
					& {
						position: relative;
						white-space: nowrap;
						@include transition(.2s all);
					}
				}
			}
		}
	}
</style>
