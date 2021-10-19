<template>
	<div class="post">
		<news-header />
		<div class="title">
			<div class="wrap">
				<div class="input">
					<input type="text" placeholder="제목을 입력해주세요">
				</div>
			</div>
		</div>
		<div class="wrap">
			<div class="contents">
				<div>
					<tip-tap-editor :editor="editor" />
				</div>
			</div>
			<div class="navigation">
				<div>
					<table>
						<tr>
							<td>
								<h1>공개설정</h1>
							</td>
							<td>
								<ul>
									<li>
										<div class="radio">
											<label>
												<input type="checkbox">
												<div>
													<div></div>
												</div>
												<span>전체공개</span>
											</label>
										</div>
									</li>
									<li>
										<div class="radio">
											<label>
												<input type="checkbox">
												<div>
													<div></div>
												</div>
												<span>비공개</span>
											</label>
										</div>
									</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>
								<h1>기본설정</h1>
							</td>
							<td>
								<ul>
									<li>
										<div class="checkbox">
											<label>
												<input type="checkbox">
												<div>
													<div>
														<i><font-awesome-icon :icon="faCheck" /></i>
													</div>
												</div>
												<span>댓글허용</span>
											</label>
										</div>
									</li>
									<li>
										<div class="checkbox">
											<label>
												<input type="checkbox">
												<div>
													<div>
														<i><font-awesome-icon :icon="faCheck" /></i>
													</div>
												</div>
												<span>작성자 익명</span>
											</label>
										</div>
									</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>
								<h1>테그</h1>
							</td>
							<td>
								<span>asdasdsa</span>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<news-footer />
	</div>
</template>

<script>
import tipTapEditor from '@/plugins/tiptap/tiptap-board/index'
import tipTapMenu from '@/plugins/tiptap/tiptap-board/menu'

import Helper from '@/store/helper'
import NewsHeader from '@/components/layout/news-header'
import NewsFooter from '@/components/layout/news-footer'
import NewsNavigation from '@/components/layout/news-navigation'

import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default {
	name: "post",
	components: {
		'news-header' : NewsHeader,
		'news-footer' : NewsFooter,
		'news-navigation' : NewsNavigation,
		'tip-tap-editor' : tipTapEditor,
	},
	data(){
		return {
			// Icons
			faCheck,
		}
	}
}
</script>

<style lang="scss" scoped>
	.post {
		& > .title {
			& {
				display: block;
				position: relative;
				width: 100%; height: auto;
				background-color: #fff;
				@include box-shadow(2px 2px 2px rgba(0,0,0,0.1));
			}

			& > .wrap {
				& {
					width: 100%; max-width: $wrap; height: auto;
					margin: 0 auto;
				}

				& > .input {
					& {
						display: block;
						width: 100%; height: auto;
						font-size: 0;
					}

					& > input {
						& {
							display: block;
							width: 100%; height: 100px;
							background: none; border: 0;
							outline: none; cursor: text;
							padding: 0; margin: 0;
							font-size: #{$font-size + 18};
						}
					}
				}
			}
		}
		& > .wrap {
			& {
				position: relative;
				width: 100%; max-width: $wrap; height: auto;
				margin: 0 auto;
			}

			& > .contents {
				& {
					display: inline-block;
					vertical-align: top;
					width: 900px; height: auto;
					text-align: left;
					@include transition(.2s all);
				}
			}

			& > .navigation {
				& {
					display: block;
					position: absolute;
					right: 0; top: 0;
					width: 300px; min-height: 300px;
				}

				& > div {
					& > table {
						& {
							width: 100%; height: auto;
							border: 0; background: none;
						}

						tr {
							& {
								border: 0; background: none;
							}

							& > td {
								& {
									border: 0; background: none;
									padding: 0; margin: 0;
									line-height: 1;
									padding-bottom: 10px;
								}

								&:nth-child(1) {
									& {
										white-space: nowrap;
										padding-right: 15px;
									}

									& > h1 {
										& {
											display: block;
											font-size: #{$font-size};
											font-weight: bold;
											line-height: 1;
										}
									}
								}

								&:nth-child(2){
									& {
										width: 100%;
									}

									& > ul {
										& {
											display: block;
											padding: 0; margin: 0;
											list-style: none;
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

	.radio {
		& {
			display: block;
		}

		& > label {
			& {
				display: block;
				cursor: pointer;
				font-size: 0;
			}

			& > div {
				& {
					display: inline-block;
					vertical-align: middle;
					padding-top: 3px;
				}

				& > div {
					& {
						display: block;
						position: relative;
						width: 16px; height: 16px;
						background-color: #fff;
						border: 1px solid #ddd;
						border-radius: 50%;
					}

					&:after {
						& {
							content: " ";
							display: block;
							position: absolute;
							width: 8px; height: 8px;
							left: 50%; top: 50%;
							background-color: #3f63bf;
							border-radius: 50%;
							opacity: 0;
							@include transform(translate(-50%, -50%));
							@include transition(.1s all);
						}
					}
				}
			}

			& > span {
				& {
					display: inline-block;
					vertical-align: middle;
					font-size: #{$font-size};
					line-height: 1;
					padding-left: 7px;
				}
			}

			& > input{
				& {
					display: none;
				}

				&:checked ~ div {
					& > div {
						&:after {
							& {
								content: " ";
								display: block;
								position: absolute;
								width: 8px; height: 8px;
								left: 50%; top: 50%;
								background-color: #3f63bf;
								border-radius: 50%;
								opacity: 1;
								@include transform(translate(-50%, -50%));
								@include transition(.1s all);
							}
						}
					}
				}
			}
		}
	}

	.checkbox {
		& {
			display: block;
		}

		& > label {
			& {
				display: block;
				cursor: pointer;
				font-size: 0;
			}

			& > div {
				& {
					display: inline-block;
					vertical-align: middle;
					padding-top: 3px;
				}

				& > div {
					& {
						display: block;
						position: relative;
						width: 16px; height: 16px;
						background-color: #fff;
						border: 1px solid #ddd;
						@include transition(.2s all);
					}

					& > i {
						& {
							display: block;
							position: absolute;
							left: 50%; top: 50%;
							font-size: #{$font-size - 4};
							color: #fff;
							line-height: 0;
							letter-spacing: 0;
							opacity: 0;
							@include transform(translate(-50%, -50%));
							@include transition(.2s all);
						}
					}
				}
			}

			& > span {
				& {
					display: inline-block;
					vertical-align: middle;
					font-size: #{$font-size};
					line-height: 1;
					padding-left: 7px;
				}
			}

			& > input{
				& {
					display: none;
				}

				&:checked ~ div {
					& > div {
						& {
							background-color: #3f63bf;
							@include transition(.2s all);
						}

						& > i {
							& {
								opacity: 1;
								@include transition(.2s all);
							}
						}
					}
				}
			}
		}
	}
</style>
