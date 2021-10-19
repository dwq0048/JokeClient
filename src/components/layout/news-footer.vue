<template>
	<div class="news-header" ref="Head">
		<div>
			<ul>
				<li>
					<router-link to="#">
						<div>
							<span>이용약관</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="#">
						<div>
							<span>개인정보처리방침</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="#">
						<div>
							<span>서비스안내</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="#">
						<div>
							<span>사이트맵</span>
						</div>
					</router-link>
				</li>
			</ul>
			<h1>Copyright © <span>JOKENEWS</span> Corp. All Rights Reserved.</h1>
		</div>
	</div>
</template>

<script>
export default {
	name : "news-header",
	methods : {
		getFooter(){
			const Element = document.querySelectorAll('#app');
			const Footer = this.$refs['Head'];
			Element.forEach((item) => {
				if(screen.height > Number(item.scrollHeight + Footer.scrollHeight)){
					Footer.classList.add('absolute');
				}
			});
		}
	},
	mounted() {
		this.getFooter();
	},
}
</script>

<style lang="scss" scoped>
	.news-header {
		& {
			display: block;
			width: 100%; height: auto;
			background-color: #fff;
			margin-top: 30px;
			border-top: 1px solid #ddd;
			@include box-shadow(1px 1px 1px rgba(0,0,0,0.1));
		}

		& > div {
			& {
				display: block;
				width: 100%; max-width: $wrap; height: auto;
				margin: 0 auto;
				padding: 15px;
			}

			& > ul {
				& {
					display: block;
					width: 100%; height: auto;
					padding: 0; margin: 0;
					list-style: none;
					text-align: center;
					font-size: 0;
				}

				& > li {
					& {
						display: inline-block;
						padding: 0 10px;
						border-right: 1px solid #ddd;
					}

					&:nth-last-child(1){
						& {
							border-right: 0;
						}
					}

					& > a {
						& {
							display: block;
							text-decoration: none;
							font-size: 0;
						}

						& > div {
							& > span {
								& {
									display: inline-block;
									vertical-align: middle;
									line-height: 1;
									font-size: #{$font-size - 2};
									color: #2c3e50;
									@include transition(.2s all);
								}
							}
						}

						&:hover {
							& > div {
								& > span {
									& {
										color: #1e2a36;
										@include transition(.2s all);
									}
								}
							}
						}
					}
				}
			}

			& > h1 {
				& {
					display: block;
					text-align: center;
					font-size: #{$font-size + 2};
					font-weight: normal;
					color: #1e2a36;
					line-height: 1;
					letter-spacing: 1px;
					padding: 15px 0 5px 0;
				}

				& > span {
					& {
						font-size: #{$font-size + 4};
						font-family: UO, $fontDF;
						line-height: 1;
					}
				}
			}
		}

		&.absolute {
			& {
				position: fixed;
				left: 0; bottom: 0;
			}
		}
	}
</style>