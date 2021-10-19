<template>
	<div class="normal">
		<!-- Intro -->
		<div class="intro">
			<div class="photo">
				<h1>프로필 사진</h1>
				<div>
					<div>
						<button type="button">
							<div>
								<i><font-awesome-icon :icon="faImage" /></i>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div class="description">
				<h1>요약</h1>
				<div>
					<div>
						<div>
							텍스트를 입력해주세요
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Intro End -->

		<!-- Nickname -->
		<div class="nickname">
			<div class="title">
				<h1>프로필 이름</h1>
			</div>
			<div class="input">
				<input type="text" placeholder="닉네임을 입력해주세요">
			</div>
		</div>
		<!-- Nickname End -->

		<!-- Signature -->
		<div class="signature">
			<div class="title">
				<h1>서명</h1>
				<div class="nav">
					<div>
						<ul>
							<li class="active">
								<button type="button">
									<div>
										<span>기본</span>
									</div>
								</button>
							</li>
							<li>
								<button type="button">
									<div>
										<span>사용자 정의</span>
									</div>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="content">
				<div>
					<ul>
						<li>
							<default-signature />
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- Signature End -->

<!--
		<div class="open">
			<div class="title">
				<h1>서명</h1>
			</div>
			<div class="half">
				<div>
					<div class="sub_title">
						<h1>게시글 공개</h1>
					</div>
					<label class="checkbox">
						<input type="checkbox"  v-model="Setting.open.value" disabled>
						<div>
							<div>
								<div></div>
							</div>
						</div>
					</label>
				</div>
				<div>
					<div class="sub_title">
						<h1>댓글 공개</h1>
					</div>
					<label class="checkbox">
						<input type="checkbox" v-model="Setting.comment.value">
						<div>
							<div>
								<div></div>
							</div>
						</div>
					</label>
				</div>
			</div>
			<div class="half">
				<div>
					<div class="sub_title">
						<h1>팔로우 공개</h1>
					</div>
					<label class="checkbox">
						<input type="checkbox" v-model="Setting.follow.value">
						<div>
							<div>
								<div></div>
							</div>
						</div>
					</label>
				</div>
				<div>
					<div class="sub_title">
						<h1>위시리스트 공개</h1>
					</div>
					<label class="checkbox">
						<input type="checkbox"  v-model="Setting.wishlist.value">
						<div>
							<div>
								<div></div>
							</div>
						</div>
					</label>
				</div>
			</div>
		</div>
-->

	</div>
</template>

<script>
import { faImage } from '@fortawesome/free-solid-svg-icons'
import DefaultSignature from '@/components/widget/signature/default.vue'

export default {
	name : 'SettingNormal',
	components: {
		'default-signature' : DefaultSignature,
	},
	data(){
		return {
			// Icons
			faImage,

			// Variables
			Setting : {
				open : { value: true },
				comment : { value: true },
				follow : { value: true },
				wishlist : { value: true },
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.normal {
		& {
			display: block;
			padding: 0 15px;
		}

		& > .intro {
			& {
				display: table;
				width: 100%; height: auto;
				font-size: 0;
				padding-bottom: 15px;
			}

			& > div {
				& > h1 {
					& {
						display: block;
						width: 100%;
						font-size: #{$font-size + 2};
						padding: 15px 0;
						color: #2c3e50;
						white-space: nowrap;
					}
				}
			}

			& > .photo {
				& { display: table-cell; width: 15%; }

				& > div {
					& {
						display: block;
						width: 100%; height: auto;
						padding-right: 7px;
					}

					& > div {
						& {
							display: block;
							position: relative;
							width: 100%; height: auto;
						}

						&:after {
							content: " ";
							display: block;
							width: 100%; height: auto;
							padding-bottom: 100%;
						}

						& > button {
							& {
								display: block;
								position: absolute;
								width: 100%; height: 100%;
								left: 0; top: 0;
								outline: none; cursor: pointer;
								background: none; border: 0;
								padding: 0; margin: 0;
								background-color: #f9f9f9;
								border: 1px solid #ddd;
								border-radius: 5px;
								padding: 7px;
								font-size: 0;
							}

							& > div {
								& {
									display: block;
									position: relative;
									width: 100%; height: 100%;
									border: 3px dashed rgba(63, 99, 191, 0.4);
									@include transition(.2s all);
								}

								& > i {
									& {
										position: absolute;
										display: inline-block;
										left: 50%; top: 50%;
										line-height: 0;
										letter-spacing: 0;
										font-size: #{$font-size + 4};
										color: rgba(63, 99, 191, 0.4);
										@include transform(translate(-50%, -50%));
										@include transition(.2s all);
									}
								}
							}

							&:hover {
								& > div {
									& {
										border: 3px dashed rgba(63, 99, 191, 1);
										@include transition(.2s all);
									}

									& > i {
										& {
											color: rgba(63, 99, 191, 1);
											@include transition(.2s all);
										}
									}
								}
							}
						}
					}
				}
			}

			& > .description {
				& { display: table-cell; width: 85%; padding-left: 7px; }

				& > div {
					& {
						display: block;
						position: relative;
						width: 100%; height: auto;
					}

					&:after {
						& {
							content: " ";
							display: block;
							padding-bottom: 16.7%;
						}
					}

					& > div {
						& {
							display: block;
							position: absolute;
							width: 100%; height: 100%;
							left: 0; top: 0;
							background-color: #f9f9f9;
							border: 1px solid #ddd;
							border-radius: 5px;
						}
					}
				}
			}
		}

		& > .nickname {
			& {
				padding-bottom: 15px;
			}
		}

		& > .signature {
			& {
				padding-bottom: 15px;
			}

			& > .title {
				& {
					display: table;	
				}

				& > h1 {
					& {
						display: table-cell;
						vertical-align: bottom;
						width: 100%; height: auto;
					}
				}

				& > .nav {
					& {
						display: table-cell;
						vertical-align: bottom;
						white-space: nowrap;
					}

					& > div {
						& {
							width: auto; height: 30px;
							overflow: hidden;
						}
						& > ul {
							& {
								display: block;
								width: 100%; height: auto;
								padding: 0; margin: 0;
								list-style: none;
								font-size: 0;
								border-radius: 5px;
								overflow: hidden;
							}

							& > li {
								& {
									display: inline-block;
									vertical-align: middle;
								}

								& > button {
									& {
										display: block;
										outline: none; cursor: pointer;
										background: none; border: 0;
										padding: 0; margin: 0;
									}

									& > div {
										& {
											display: block;
											position: relative;
											padding: 5px 15px;
											padding-bottom: 15px;
											background-color: #eee;
										}
										
										& > span {
											& {
												position: relative;
												display: inline-block;
												vertical-align: middle;
												font-size: #{$font-size};
												font-weight: bold;
												line-height: 1;
												color: #2c3e50;
												z-index: 10;
											}
										}

										&:after {
											content: " ";
											display: block;
											position: absolute;
											left: 0; top: 100%;
											width: 100%; height: 100%;
											background-color: #3f63bf;
											z-index: 1;
											@include transition(.2s all);
										}
									}

									&:hover {
										& > div {
											& > span {
												& {
													color: #fff;
													@include transition(.2s all);
												}
											}
											&:after {
												content: " ";
												display: block;
												position: absolute;
												left: 0; top: 0;
												width: 100%; height: 100%;
												background-color: #3f63bf;
												z-index: 1;
												border-radius: 5px;
												@include transition(.2s all);
											}
										}
									}
								}

								&.active {
									& > button {
										& > div {
											& > span {
												& {
													color: #fff;
													@include transition(.2s all);
												}
											}
											&:after {
												content: " ";
												display: block;
												position: absolute;
												left: 0; top: 0;
												width: 100%; height: 100%;
												background-color: #3f63bf;
												z-index: 1;
												border-radius: 5px;
												@include transition(.2s all);
											}
										}
									}
								}
							}

							&:hover {
								& > li {
									&.active {
										& > button {
											& > div {
												& > span {
													& {
														color: #2c3e50;
														@include transition(.2s all);
													}
												}
												&:after {
													content: " ";
													display: block;
													position: absolute;
													left: 0; top: 100%;
													width: 100%; height: 100%;
													background-color: #3f63bf;
													z-index: 1;
													border-radius: 5px;
													@include transition(.2s all);
												}
											}

											&:hover {
												& > div {
													& > span {
														& {
															color: #fff;
															@include transition(.2s all);
														}
													}
													&:after {
														content: " ";
														display: block;
														position: absolute;
														left: 0; top: 0;
														width: 100%; height: 100%;
														background-color: #3f63bf;
														z-index: 1;
														border-radius: 5px;
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
			}

			& > .content {
				& {
					display: block;
				}

				& > div {
					& > ul {
						& {
							display: block;
							position: relative;
							width: 100%; height: auto;
							white-space: nowrap;
							list-style: none;
							font-size: 0;
						}

						& > li {
							& {
								display: block;
								width: 100%; height: auto;
							}
						}
					}
				}
			}
		}
	}

	.title {
		& {
			display: block;
			width: 100%; height: auto;
			font-size: 0;
			padding: 15px 0;
		}

		& > h1 {
			& {
				display: block;
				width: 100%; height: auto;
				font-size: #{$font-size + 4};
				color: #2c3e50;
				line-height: 1;
				padding-bottom: 15px;
				border-bottom: 1px solid #ccc;
			}
		}
	}

	.sub_title {
		& {
			display: block;
			width: 100%; height: auto;
			font-size: 0;
			padding: 15px 0;
		}

		& > h1 {
			& {
				display: block;
				width: 100%; height: auto;
				font-size: #{$font-size + 2};
				color: #2c3e50;
				line-height: 1;
			}
		}
	}


	.input {
		& > input {
			& {
				display: block;
				width: 100%; height: 35px;
				cursor: text; outline: none;
				background: none; border: 0;
				padding: 0; border: 0;
				background-color: #f9f9f9;
				border: 1px solid #ddd;
				border-radius: 3px;
				padding: 2px 15px;
			}
		}
	}

	.checkbox {
		& {
			display: inline-block;
			font-size: 0;
			cursor: pointer; outline: none;
		}

		& > input {
			& {
				display: none;
			}
		}

		& > div {
			& {
				display: block;
				position: relative;
				width: 60px; height: 30px;
				border-radius: 50px;
				background-color: #f1f1f1;
				border: 1px solid #ddd;
				@include box-shadow(1px 1px 1px rgba(0,0,0,0.1));
			}
			
			& > div {
				& {
					position: absolute;
					left: 2px; top: 50%;
					width: 25px; height: 25px;
					background-color: #ddd;
					border: 1px solid #ddd;
					border-radius: 50%;
					@include box-shadow(0px 0px 0px rgba(0,0,0,0.1));
					@include transform(translateY(-50%));
					@include transition(.2s all);
				}

				& > div {
					& {
						position: relative;
						width: 100%; height: 100%;
					}

					&:after {
						content: " ";
						display: block;
						position: absolute;
						width: 60%; height: 3px;
						left: 50%; top: 50%;
						border-radius: 5px;
						@include transform(translate(-50%, -6px));
						@include box-shadow(0px 1px 2px rgba(0,0,0,0.1));
					}

					&:before {
						content: " ";
						display: block;
						position: absolute;
						width: 60%; height: 3px;
						left: 50%; top: 50%;
						border-radius: 5px;
						@include transform(translate(-50%, 1px));
						@include box-shadow(0px 1px 2px rgba(0,0,0,0.1));
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

		& > input:checked ~ div {
			& {
				background-color: #fff;
				@include transition(.2s all);
			}

			& > div {
				& {
					left: 30px;
					background-color: #3f63bf;
					@include transition(.2s all);
				}
			}
		}

		& > input:disabled ~ div {
			& {
				background-color: #eee;
				cursor: not-allowed;
				& > div {
					& {
						background-color: #aaa;
					}
				}
			}
		}
	}

	.half {
		& {
			font-size: 0;
		}

		& > div {
			& {
				display: inline-block;
				vertical-align: middle;
				width: 50%;
			}
		}
	}
</style>
