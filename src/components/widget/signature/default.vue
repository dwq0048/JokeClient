<template>
	<div class="default">
		<div>
			<div class="top">
				<div class="profile">
					<div class="photo">
						<div>
							<div>

							</div>
						</div>
					</div>
					<div class="name">
						<h1>누구누구</h1>
					</div>
					<div class="arrow">
						<i><font-awesome-icon :icon="faChevronRight" /></i>
					</div>
					<div class="subscribe">
						<button type="button">
							<div>
								<i><font-awesome-icon :icon="faUserPlus" /></i>
								<span>팔로우</span>
							</div>
						</button>
					</div>
				</div>
				<div class="info">
					<ul>
						<li>
							<div>
								<span>구독자 <span>123123</span></span>
							</div>
						</li>
						<li>
							<div>
								<span>게시글 <span>453</span></span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="bottom">
				<ul>
					<li>
						<router-link to="#">
							<div>
								<span>에래라랄ㄹ루ㅜㄹ루아ㅏㅁㄴ암낭 ㅁㄴㅇㅁㄴㅇ</span>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="#">
							<div>
								<span>에래라랄ㄹ루ㅜㄹ루아ㅏㅁㄴ암낭 ㅁㄴㅇㅁㄴㅇ</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { faChevronRight, faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default {
	name: 'default',
	data(){
		return {
			// Icons
			faChevronRight, faUserPlus

		}
	}
}
</script>

<style lang="scss" scoped>
	.default {
		& {
			display: block;
			width: 100%; height: auto;
		}

		& > div {
			& {
				position: relative;
				width: 100%; height: auto;
				padding: 10px 15px;
			}

			&:after{
				& {
					content: " ";
					display: block;
					position: absolute;
					left: 0; top: 0;
					width: 4px; height: 100%;
					background-color: #ccc;
				}
			}

			& > .top {
				& {
					display: table;
					width: 100%; height: auto;
					font-size: 0;
				}

				& > .profile {
					& {
						display: table-cell;
						vertical-align: middle;
						width: 100%; height: auto;
					}

					& > .photo {
						& {
							display: inline-block;
							vertical-align: middle;
						}

						& > div {
							& {
								display: block;
								position: relative;
								width: 25px; height: auto;
							}

							&:after {
								& {
									content: " ";
									display: block;
									padding-bottom: 100%;
								}
							} 

							& > div {
								& {
									display: block;
									position: absolute;
									width: 100%; height: 100%;
									left: 0; top: 0;
									border-radius: 50%;
									overflow: hidden;
									background-color: #333;
								}
							}
						}
					}

					& > .name {
						& {
							display: inline-block;
							vertical-align: middle;
							padding-left: 7px;
						}

						& > h1 {
							& {
								display: inline-block;
								vertical-align: middle;
								font-size: #{$font-size};
								font-weight: bold;
								line-height: 1;
								color: #2c3e50;
							}
						}
					}

					& > .arrow {
						& {
							display: inline-block;
							vertical-align: middle;
							padding: 0 10px;
						}

						& > i {
							& {
								display: inline-block;
								vertical-align: middle;
								font-size: #{$font-size - 2};
								line-height: 1;
								color: #ccc;
							}
						}
					}

					& > .subscribe {
						& {
							display: inline-block;
							vertical-align: middle;
						}

						& > button {
							& {
								display: block;
								cursor: pointer; outline: none;
								background: none; border: 0;
								padding: 0; margin: 0;
								font-size: 0;
							}

						& > div {
								& > i {
									& {
										display: inline-block;
										vertical-align: middle;
										font-size: #{$font-size - 1};
										font-weight: normal;
										line-height: 1;
										color: #3f63bf;
									}
								}

								& > span {
									& {
										display: inline-block;
										vertical-align: middle;
										font-size: #{$font-size - 1};
										font-weight: bold;
										padding-left: 7px;
										color: #3f63bf;
									}
								}
							}
						}
					}
				}

				& > .info {
					& {
						display: table-cell;
						vertical-align: middle;
						white-space: nowrap;
					}

					& > ul {
						& {
							display: inline-block;
							vertical-align: middle;
							list-style: none;
							padding: 0; margin: 0;
							font-size: 0;
						}

						& > li {
							& {
								display: inline-block;
								vertical-align: middle;
								padding-right: 10px;
							}

							&:nth-last-child(1){
								& {
									padding-right: 0;
								}
							}
							
							& > div {
								& > span {
									& {
										display: inline-block;
										vertical-align: middle;
										font-size: #{$font-size - 1};
										font-weight: bold;
										color: #2c3e50;
										line-height: 1;
									}

									& > span {
										& {
											font-weight: normal;
										}
									}
								}
							}
						}
					}
				}
			}

			& > .bottom {
				& {
					display: block;
					width: 100%; height: auto;
					padding-top: 15px;
				}

				& > ul {
					& {
						display: block;
						width: 100%; height: auto;
						list-style: none;
						padding: 0; margin: 0;
					}

					& > li {
						& {
							display: block;
							position: relative;
							width: 100%; height: auto;
							padding: 5px 5px;
							padding-left: 15px;
						}

						&:after {
							& {
								content: " ";
								display: block;
								position: absolute;
								left: 0; top: 50%;
								width: 3px; height: 3px;
								border-radius: 50%;
								background-color: #2c3e50;
								@include transform(translateY(-50%));
							}
						}

						& > a {
							& {
								display: block;
								text-decoration: none;
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
							}

							&:hover, &:active {
								& > div {
									& > span {
										& {
											color: #333;
											text-decoration: underline;
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
