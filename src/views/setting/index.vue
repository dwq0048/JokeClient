<template>
	<div class="setting">
		<news-header />
		<div class="profile">
			<div>
				<div class="left">
					<div class="img">

					</div>
					<router-link to="#" class="name">
						<div>
							<span>누구누구</span>
						</div>
					</router-link>
					<i><font-awesome-icon :icon="faChevronRight" /></i>
					<router-link to="#" class="current">
						<div>
							<span>설정</span>
						</div>
					</router-link>
				</div>
				<div class="right">
					<!--
					<button type="button">
						<div>
							<span>저장</span>
						</div>
					</button>
					-->
				</div>
			</div>
		</div>
		<div class="wrap">
			<div class="content bounce">
				<router-view />
			</div>
			<div class="navigation bounce">
				<ul>
					<li v-for="(item, i) in Nav" :key="i" :class="{ active : item.active }">
						<router-link :to="item.link">
							<div>
								<span>{{ item.ko }}</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<news-footer />
	</div>
</template>

<script>
import Helper from '@/store/helper'
import NewsHeader from '@/components/layout/news-header'
import NewsFooter from '@/components/layout/news-footer'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default {
	name : 'Setting',
	components: {
		'news-header' : NewsHeader,
		'news-footer' : NewsFooter,
	},
	data(){
		return {
			// Icons
			faChevronRight,

			// Variables
			Nav: [
				{ ko: '일반', link: '/setting', active : true },
				{ ko: '언론사 관리', link: '/setting/press', active : false },
				{ ko: '공개 / 알림설정', link: '/setting/private', active : false },
				{ ko: '개인정보 관리', link: '/setting/info', active : false },
			]
		}
	},
	mounted(){
		Helper.Bounce();
	}
}
</script>

<style lang="scss" scoped>
	.setting {
		& > .profile {
			& {
				display: block;
				width: 100%; height: auto;
				background-color: #fff;
				border-bottom: 1px solid #ddd;
				@include box-shadow(2px 2px 2px rgba(0,0,0,0.1));
			}

			& > div {
				& {
					display: table;
					width: 100%; max-width: $wrap; height: auto;
					margin: 0 auto;
					padding: 25px 0;
				}

				& > .left {
					& {
						display: table-cell;
						vertical-align: middle;
						width: 100%; height: auto;
					}

					& > .img {
						& {
							position: relative;
							display: inline-block;
							vertical-align: middle;
							width: 65px; height: auto;
							background-color: #333;
							border-radius: 3px;
						}

						&:after {
							content: " ";
							display: block;
							width: 100%; height: auto;
							padding-bottom: 100%;
						}
					}

					& > .name {
						& {
							position: relative;
							display: inline-block;
							vertical-align: middle;
							text-decoration: none;
							margin-left: 20px;
							font-size: 0;
						}

						& > div {
							& > span {
								& {
									display: inline-block;
									vertical-align: middle;
									font-size: #{$font-size + 8};
									font-weight: bold;
									color: #2c3e50;
									line-height: 1;
									letter-spacing: 1px;
								}
							}
						}
					}

					& > i {
						& {
							display: inline-block;
							vertical-align: middle;
							padding-left: 10px;
							line-height: 1;
							font-size: #{$font-size - 2};
							color: #2c3e50;
						}
					}

					& > .current {
						& {
							position: relative;
							display: inline-block;
							vertical-align: middle;
							text-decoration: none;
							margin-left: 10px;
							font-size: 0;
						}

						& > div {
							& > span {
								& {
									display: inline-block;
									vertical-align: middle;
									font-size: #{$font-size};
									font-weight: bold;
									color: #2c3e50;
									line-height: 1;
									letter-spacing: 1px;
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
					}

					& > button {
						& {
							display: block;
							cursor: pointer; outline: none; 
							background: none; border: 0;
							padding: 0; margin: 0;
						}

						& > div {
							& {
								display: block;
								background-color: #e18c0d;
								border-radius: 3px;
								font-size: 0;
								padding: 10px 40px;
								@include box-shadow(1px 1px 1px rgba(0,0,0,0.1));
							}

							& > span {
								& {
									display: inline-block;
									vertical-align: middle;
									font-size: #{$font-size + 2};
									font-weight: bold;
									color: #fff;
								}
							}
						}
					}
				}
			}
		}

		& > .wrap {
			& {
				display: table;
				width: 100%; max-width: $wrap; height: auto;
				margin: 0 auto;
			}

			& > .content {
				& {
					display: table-cell;
					vertical-align: top;
					width: 100%; height: auto;
					padding: 15px 0;
				}
			}

			& > .navigation {
				& {
					display: table-cell;
					vertical-align: top;
					white-space: nowrap;
				}

				& > ul {
					& {
						display: block;
						width: 270px; height: auto;
						padding: 0; margin: 0;
						list-style: none;
						font-size: 0;
						padding-top: 20px;
						padding-left: 20px;
					}

					& > li {
						& {
							display: block;
							text-align: left;
							padding: 5px 0;
						}

						& > a {
							& {
								display: block;
								position: relative;
								text-decoration: none;
								font-size: 0;
							}

							& > div {
								& {
									padding: 10px;
								}

								& > span {
									& {
										position: relative;
										display: inline-block;
										vertical-align: middle;
										font-size: #{$font-size};
										color: #2c3e50;
										z-index: 10;
										@include transition(.2s all);
									}
								}
							}

							&:after {
								content: " ";
								position: absolute;
								width: 0px; height: 100%;
								left: 0; top: 0;
								background-color: #aaa;
								border-radius: 5px;
								@include transition(.2s all);
							}

							&:hover {
								&:after {
									content: " ";
									position: absolute;
									width: 100%; height: 100%;
									left: 0; top: 0;
									background-color: #aaa;
									@include transition(.2s all);
								}

								& > div {
									& > span {
										& {
											color: #fff;
											@include transition(.2s all);
										}
									}
								}
							}
						}

						&.active {
							& > a {	
								&:after {
									position: absolute;
									width: 100%; height: 100%;
									left: 0; top: 0;
									background-color: #aaa;
									@include transition(.2s all);
								}

								& > div {
									& > span {
										& {
											color: #fff;
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
	}
</style>
