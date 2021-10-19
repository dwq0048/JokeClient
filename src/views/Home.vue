<template>
	<div class="home">
		<news-header />
		<div class="wrap">
			<div class="contents">
				<div class="bounce">
					<div class="template-1">
						<div>
							<div class="title">
								<div class="left">
									<h1>인기 뉴스<span>알 수 없는 알고리즘으로 인기 뉴스를 추출합니다.</span></h1>
								</div>
								<div class="right">
									<div>
										<div class="select">
											<select>
												<option value="0" selected>인기뉴스</option>
												<option value="0">최신뉴스</option>
											</select>
										</div>
										<button type="button">
											<div>
												<i><font-awesome-icon :icon="faPlusSquare" /></i>
											</div>
										</button>
									</div>
								</div>
							</div>
							<div class="data">
								<div class="top">
									<div class="left">
										<div>
											<div></div>
										</div>
									</div>
									<div class="right">
										<ul>
											<li v-for="(item, index) in TopList" :key="index">
												<div>

												</div>
											</li>
										</ul>
									</div>
								</div>
								<div class="bottom">
									<div>
										<div class="list">
											<ul>
												<li v-for="(item, index) in BottomList" :key="index">
													<div>
														안녕하세요
													</div>
												</li>
											</ul>
											<ul>
												<li v-for="(item, index) in BottomList" :key="index">
													<div>
														안녕하새요
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="bounce">
					<div class="template-2">
						<div>
							<div class="top">
								<div class="title">
									<div class="left">
										<h1>태그 검색<span>인기 태그를 우선으로 추출합니다.</span></h1>
									</div>
									<div class="right">
										<div>
											<div class="select">
												<select>
													<option value="0" selected>인기뉴스</option>
													<option value="0">최신뉴스</option>
												</select>
											</div>
											<button type="button">
												<div>
													<i><font-awesome-icon :icon="faPlusSquare" /></i>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div class="bottom">
								<ul>
									<li v-for="(item, index) in TagList" :key="index">
										<div>
											<div>

											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="bounce">
					<div class="template-3">
						<div>
							<div class="top">
								<div class="title">
									<div class="left">
										<h1>추천 뉴스</h1>
									</div>
									<div class="right">

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

			<news-navigation />
		</div>
		<news-footer />
	</div>
</template>

<script>
import Helper from '@/store/helper'
import NewsHeader from '@/components/layout/news-header'
import NewsFooter from '@/components/layout/news-footer'
import NewsNavigation from '@/components/layout/news-navigation'

import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'

export default {
	name: 'Home',
	components: {
		'news-header' : NewsHeader,
		'news-footer' : NewsFooter,
		'news-navigation' : NewsNavigation
	},
	data(){
		return {
			// Icons
			faPlusSquare,

			// Variables
			TopList : [
				{},{},{}
			],
			BottomList : [
				{},{},{},{},{}
			],

			TagList : [
				{},{},{},{},{},{},{},{},{},{}
			],
		}
	},
	mounted(){
		Helper.Bounce();
	}
}
</script>

<style lang="scss" scoped>
	.home {
		& {
			display: block;
		}

		& > .wrap {
			& {
				display: block;
				width: 100%; max-width: $wrap; height: auto;
				margin: 0 auto;
				font-size: 0;
				text-align: center;
			}

			& > .contents {
				& {
					display: inline-block;
					vertical-align: top;
					width: 900px; height: auto;
					text-align: left;
					@include transition(.2s all);
				}

				& > div {
					& {
						display: block;
						width: 100%; height: auto;
						background-color: #fff;
						border: 1px solid #ddd;
						margin-top: 25px;
						@include box-shadow(1px 1px 1px rgba(0,0,0,0.1));
					}
				}
			}
		}
	}

	.template-3 {
		& > div {
			& > .top {
				& {
					display: block;
					width: 100%; height: auto;
				}

				& > .title {
					& {
						display: table;
						width: 100%; height: auto;
						font-size: 0;
						padding: 15px;
						border-bottom: 1px solid #ddd;
					}

					& > .left {
						& {
							display: table-cell;
							vertical-align: middle;
							text-align: left;
							width: 100%; height: auto;
						}

						& > h1 {
							& {
								display: inline-block;
								vertical-align: middle;
								font-size: #{$font-size + 6};
								color: #2c3e50;
								line-height: 1;
							}

							& > span {
								& {
									display: inline-block;
									vertical-align: bottom;
									font-size: #{$font-size};
									font-weight: normal;
									line-height: 1;
									padding-left: 5px;
									color: #999;
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

						& > div {
							& {
								display: inline-block;
								vertical-align: middle;
								width: 100%; height: auto;
							}

							& > .select {
								& {
									display: inline-block;
									vertical-align: middle;
									width: 150px; height: 27px;
									border: 1px solid #ddd; 
									border-radius: 3px;
									margin-right: 15px;
								}

								& > select {
									& {
										display: block;
										width: 100%; height: 100%;
										outline: none; cursor: pointer;
										background: none; border: 0;
										padding: 0; margin: 0;
										background-color: #f9f9f9;
										color: #2c3e50;
										font-size: #{$font-size - 1};
										padding: 0 5px;
									}
								}
							}

							& > button {
								& {
									display: inline-block;
									vertical-align: middle;
									outline: none; cursor: pointer;
									background: none; border: 0;
									padding: 0; margin: 0;
								}

								& > div {
									& {
										display: block;
										font-size: 0;
									}

									& > i {
										& {
											display: inline-block;
											vertical-align: middle;
											font-size: #{$font-size + 8};
											line-height: 0;
											letter-spacing: 0;
											color: #aaa;
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

	.template-2 {
		& > div {
			& {
				display: block;
				width: 100%; height: auto;
			}

			& > .top {
				& {
					display: block;
					width: 100%; height: auto;
				}

				& > .title {
					& {
						display: table;
						width: 100%; height: auto;
						font-size: 0;
						padding: 15px;
						border-bottom: 1px solid #ddd;
					}

					& > .left {
						& {
							display: table-cell;
							vertical-align: middle;
							text-align: left;
							width: 100%; height: auto;
						}

						& > h1 {
							& {
								display: inline-block;
								vertical-align: middle;
								font-size: #{$font-size + 6};
								color: #2c3e50;
								line-height: 1;
							}

							& > span {
								& {
									display: inline-block;
									vertical-align: bottom;
									font-size: #{$font-size};
									font-weight: normal;
									line-height: 1;
									padding-left: 5px;
									color: #999;
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

						& > div {
							& {
								display: inline-block;
								vertical-align: middle;
								width: 100%; height: auto;
							}

							& > .select {
								& {
									display: inline-block;
									vertical-align: middle;
									width: 150px; height: 27px;
									border: 1px solid #ddd; 
									border-radius: 3px;
									margin-right: 15px;
								}

								& > select {
									& {
										display: block;
										width: 100%; height: 100%;
										outline: none; cursor: pointer;
										background: none; border: 0;
										padding: 0; margin: 0;
										background-color: #f9f9f9;
										color: #2c3e50;
										font-size: #{$font-size - 1};
										padding: 0 5px;
									}
								}
							}

							& > button {
								& {
									display: inline-block;
									vertical-align: middle;
									outline: none; cursor: pointer;
									background: none; border: 0;
									padding: 0; margin: 0;
								}

								& > div {
									& {
										display: block;
										font-size: 0;
									}

									& > i {
										& {
											display: inline-block;
											vertical-align: middle;
											font-size: #{$font-size + 8};
											line-height: 0;
											letter-spacing: 0;
											color: #aaa;
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
					padding: 15px;
				}

				& > ul {
					& {
						display: block;
						width: 868px; height: auto;
						list-style: none;
						padding: 0; margin: 0;
						white-space: nowrap;
						overflow: hidden;
					}

					& > li {
						& {
							display: inline-block;
							vertical-align: middle;
							padding-right: 15px;
						}

						& > div {
							& {
								display: block;
								width: 170px; height: auto;
							}

							& > div {
								& {
									display: block;
									width: 100%; height: auto;
									background-color: #ddd;
								}

								&:after {
									content: " ";
									display: block;
									padding-bottom: 70%;
								}
							}
						}
					}
				}
			}
		}
	}

	.template-1 {
		& > div {
			& > .title {
				& {
					display: table;
					width: 100%; height: auto;
					font-size: 0;
					padding: 15px;
					border-bottom: 1px solid #ddd;
				}

				& > .left {
					& {
						display: table-cell;
						vertical-align: middle;
						text-align: left;
						width: 100%; height: auto;
					}

					& > h1 {
						& {
							display: inline-block;
							vertical-align: middle;
							font-size: #{$font-size + 6};
                            color: #2c3e50;
							line-height: 1;
						}

						& > span {
							& {
								display: inline-block;
								vertical-align: bottom;
								font-size: #{$font-size};
								font-weight: normal;
								line-height: 1;
								padding-left: 5px;
								color: #999;
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

					& > div {
						& {
							display: inline-block;
							vertical-align: middle;
							width: 100%; height: auto;
						}

						& > .select {
							& {
								display: inline-block;
								vertical-align: middle;
								width: 150px; height: 27px;
								border: 1px solid #ddd; 
								border-radius: 3px;
								margin-right: 15px;
							}

							& > select {
								& {
									display: block;
									width: 100%; height: 100%;
									outline: none; cursor: pointer;
									background: none; border: 0;
									padding: 0; margin: 0;
									background-color: #f9f9f9;
									color: #2c3e50;
									font-size: #{$font-size - 1};
									padding: 0 5px;
								}
							}
						}

						& > button {
							& {
								display: inline-block;
								vertical-align: middle;
								outline: none; cursor: pointer;
								background: none; border: 0;
								padding: 0; margin: 0;
							}

							& > div {
								& {
									display: block;
									font-size: 0;
								}

								& > i {
									& {
										display: inline-block;
										vertical-align: middle;
										font-size: #{$font-size + 8};
										line-height: 0;
										letter-spacing: 0;
										color: #aaa;
									}
								}
							}
						}
					}
				}
			}

			& > .data {
				& > .top {
					& {
						display: table;
						width: 100%; height: auto;
						font-size: 0;
						padding: 15px;
					}

					& > .left {
						& {
							display: table-cell;
							vertical-align: top;
							white-space: nowrap;
							text-align: left;
						}

						& > div {
							& {
								display: block;
								width: 350px; height: 240px;
							}

							& > div {
								& {
									display: block;
									position: relative;
									width: 100%; height: 100%;
									background-color: #ddd;
								}
							}
						}
					}

					& > .right {
						& {
							display: table-cell;
							vertical-align: top;
							width: 100%; height: auto;
						}

						& > ul {
							& {
								display: block;
								width: 100%; height: auto;
								list-style: none;
								padding: 0; margin: 0;
								padding-left: 15px;
							}

							& > li {
								& {
									display: block;
									width: 100%; height: auto;
									padding-bottom: 15px;
								}

								&:nth-last-child(1){
									& {
										padding-bottom: 0;
									}
								}

								& > div {
									& {
										width: 100%; height: 70px;
										background-color: #ddd;
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
						padding: 15px;
					}

					& > div {
						& {
							display: block;
							width: 100%; height: auto;
							border-top: 1px solid #ddd;
						}

						& > .list {
							& {
								display: block;
								font-size: 0;
								padding-top: 15px;
							}

							& > ul {
								& {
									display: inline-block;
									vertical-align: top;
									width: 50%; height: auto;
									list-style: none;
									border-left: 1px solid #ddd;
									padding: 10px 15px;
								}

								&:nth-child(1){
									& {
										border-left: 0;

									}
								}

								& > li {
									& {
										display: block;
										width: 100%; height: auto;
										padding: 7px 0;
									}

									& > div {
										& {
											font-size: #{$font-size};
											font-weight: bold;
											color: #333;
											line-height: 1;
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
