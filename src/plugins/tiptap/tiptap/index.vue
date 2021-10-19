<template>
	<div class="editor" ref="editor">
		<editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
			<div class="editor-menu">
				<ul>
					<li>
						<button class="heading" :class="{ 'is-active': MenuActive.heading }" @click="MenuActive('heading')">
							<p>H</p>
							<div class="click">
								<h1 :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })">제목 크기 1</h1>
								<h2 :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">제목 크기 2</h2>
								<h3 :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })">제목 크기 3</h3>
								<h4 :class="{ 'is-active': isActive.heading({ level: 4 }) }" @click="commands.heading({ level: 4 })">제목 크기 4</h4>
								<h5 :class="{ 'is-active': isActive.heading({ level: 5 }) }" @click="commands.heading({ level: 5 })">제목 크기 5</h5>
								<h6 :class="{ 'is-active': isActive.heading({ level: 6 }) }" @click="commands.heading({ level: 6 })">제목 크기 6</h6>
							</div>
							<div class="help">
								<p>제목</p>
							</div>
						</button>
					</li>
					<li>
						<button class="bold" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
							<p>B</p>
							<div class="help">
								<p>굵게</p>
							</div>
						</button>
					</li>
					<li>
						<button class="italic" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
							<p>I</p>
							<div class="help">
								<p>이탤릭</p>
							</div>
						</button>
					</li>
					<li>
						<button class="strike" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
							<p>S</p>
							<div class="help">
								<p>중앙선</p>
							</div>
						</button>
					</li>
					<li class="line"></li>
					<li>
						<button :class="{ 'is-active': isActive.alignleft() }" @click="commands.alignleft">
							<font-awesome-icon :icon="faAlignLeft" />
							<div class="help">
								<p>왼쪽 정렬</p>
							</div>
						</button>
					</li>
					<li>
						<button :class="{ 'is-active': isActive.aligncenter() }" @click="commands.aligncenter">
							<font-awesome-icon :icon="faAlignJustify" />
							<div class="help">
								<p>중앙 정렬</p>
							</div>
						</button>
					</li>
					<li>
						<button :class="{ 'is-active': isActive.alignright() }" @click="commands.alignright">
							<font-awesome-icon :icon="faAlignRight" />
							<div class="help">
								<p>오른쪽 정렬</p>
							</div>
						</button>
					</li>
					<li class="line"></li>
					<li>
						<button :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list">
							<font-awesome-icon :icon="faListUl" />
							<div class="help">
								<p>리스트</p>
							</div>
						</button>
					</li>
					<li>
						<button :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list">
							<font-awesome-icon :icon="faListOl" />
							<div class="help">
								<p>숫자 리스트</p>
							</div>
						</button>
					</li>
					<li>
						<button :class="{ 'is-active': isActive.check_item() }" @click="commands.check_item">
							<font-awesome-icon :icon="faCheckSquare" />
							<div class="help">
								<p>체크 박스</p>
							</div>
						</button>
					</li>
					<li>
						<button :class="{ 'is-active': isActive.linebreak() }" @click="commands.linebreak">
							<font-awesome-icon :icon="faMinus" />
							<div class="help">
								<p>구분 선</p>
							</div>
						</button>
					</li>
					<li class="line"></li>
					<li>
						<button :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
							<font-awesome-icon :icon="faQuoteLeft" />
							<div class="help">
								<p>인용구</p>
							</div>
						</button>
					</li>
					<li>
						<button @click="editActive('link')">
							<font-awesome-icon :icon="faLink" />
							<div class="help">
								<p>링크</p>
							</div>
						</button>
					</li>
					<li>
						<input type="file" ref="imageRef" multiple @change="imageTemporage($event.target.files, commands.images)" />
						<button @click="imageBtn()">
							<font-awesome-icon :icon="faImage" />
							<div class="help">
								<p>이미지 업로드</p>
							</div>
						</button>
					</li>
					<li>
						<button :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
							<font-awesome-icon :icon="faYoutube" />
							<div class="help">
								<p>동영상 공유</p>
							</div>
						</button>
					</li>
				</ul>
				<div class="pop-link" :class="{ 'is-active': varActive.link }">
					<div class="pop-head">
						<p>링크 삽입</p>
					</div>
					<div class="pop-contents">
						<label>
							<p>링크 주소</p>
							<div class="form-input">
								<input type="text" v-model="address" id="address" placeholder="http://..." />
							</div>
						</label>
					</div>
					<div class="pop-bottom">
						<button type="button" :class="{ 'is-active': isActive.hyperlink() }" @click="editLink(commands.hyperlink)">확인</button>
						<button type="button" @click="editActive('link')">취소</button>
					</div>
				</div>
			</div>
		</editor-menu-bar>
		<div class="editor-content" v-on:click="editContents()">
			<editor-content :editor="editor" />
		</div>
		<div class="editor-images" ref="imageScroll" :class="{ 'is-active' : editorActive }">
			<ul ref="imageList">
				<li v-for="(item, i) in imageStorage" :key="i">
					<div>
						<img :src="item.base64" :index="i">
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Blockquote, CodeBlock, HardBreak, Heading, OrderedList, BulletList, ListItem, TodoItem, TodoList, Bold, Code, Italic, Link, Strike, Underline, History, Image } from 'tiptap-extensions'
import AlignLeft from '@/components/plugin/textarea/tiptap/AlignLeft'
import AlignRight from '@/components/plugin/textarea/tiptap/AlignRight'
import AlignCenter from '@/components/plugin/textarea/tiptap/AlignCenter'
import LineBreak from '@/components/plugin/textarea/tiptap/LineBreak'
import CheckItem from '@/components/plugin/textarea/tiptap/CheckItem'
import CheckList from '@/components/plugin/textarea/tiptap/CheckList'
import HyperLink from '@/components/plugin/textarea/tiptap/HyperLink'
import Images from '@/components/plugin/textarea/tiptap/Images'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQuoteLeft, faLink, faAlignLeft, faAlignRight, faAlignJustify, faListOl, faListUl, faImage, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default {
	name: 'tip-tap-editor',
    components: {
		FontAwesomeIcon,
        EditorMenuBar,
		EditorContent
	},
	data() {
		return {
			editor: new Editor({
    			extensions: [
					new Heading({ levels: [1, 2, 3, 4, 5, 6] }),
					new Bold(),
					new Italic(),
					new Strike(),
					new Blockquote(),
					new CodeBlock(),
					new HardBreak(),
					new BulletList(),
					new OrderedList(),
					new ListItem(),
					new TodoItem(),
					new TodoList(),
					new Code(),
					new Link(),
					new Underline(),
					new History(),
					new AlignLeft(),
					new AlignRight(),
					new AlignCenter(),
					new LineBreak(),
					new CheckItem(),
					new CheckList(),
					new HyperLink(),
					new Images()
        		],
				content: ``,
				onUpdate: ({ getHTML }) => {
					this.postData = getHTML();
				},
			}),
			faQuoteLeft,
			faLink,
			faAlignLeft,
			faAlignRight,
			faAlignJustify,
			faImage,
			faYoutube,
			faListOl,
			faListUl,
			faCheckSquare,
			faMinus,
			faCheck,
			
			editorActive: false,
			varActive : {
				head : false,
				link : false
			},
			postData : '',
			address : '',

			imageStorage: [],
			fileStorage: []
		}
	},
	methods: {
		// EDIT EVENT
		editActive: function(data) {
			if(!this.varActive[data]){
				this.varActive[data] = true
			}else{
				this.varActive[data] = false
			}

			if(data == 'link'){
				var selectionText = "";
				if (document.getSelection) {
					selectionText = document.getSelection();
				} else if (document.selection) {
					selectionText = document.selection.createRange().text;
				}
				address.value = selectionText;
			}

			return this.varActive[data];
		},
		editLink: function(data) {
			let href = address.value;
			this.varActive['link'] = false

			data({ href: href });
		},
		editContents: function() {
			let data = this.varActive;
			for (var obj in this.varActive) {
				if(this.varActive[obj] == true){
					this.varActive[obj] = false
				}
			}
		},
		// EDIT EVENT

		// IMAGE EVENT
		imageBtn: function(){
			this.$refs.imageRef.click();
		},
		imageTemporage: function(files, command){
			for(let i=0;i<files.length;i++){
				this.encodeBase64ImageFile(files[i]).then((src) => {
					files[i].index = this.imageStorage.length;
					files[i].base64 = src;
					this.imageStorage.push(files[i]);
					let index = files[i].index;

					command({ src, index });
				});
			}

			console.log(this.imageStorage);
		},
		imageList: function(image){
			/*
			const elImage = document.createElement("img");
			this.encodeBase64ImageFile(image).then((src) => {

				elImage.setAttribute('src', src);
				return src;

			});
			*/
		},
		// IMAGE EVENT

		// OTHER
		encodeBase64ImageFile: function(image) {
			return new Promise((resolve, reject) => {
				let reader = new FileReader()
				reader.readAsDataURL(image)
				reader.onload = (event) => {
					resolve(event.target.result)
				}
				reader.onerror = (error) => {
					reject(error)
				}
			})
		},
		// OTHER
	},
	beforeDestroy() {
		this.editor.destroy()
	},
	mounted() {
		window.addEventListener('scroll', (data) => {
			//console.log(this.$refs['imageScroll'].offsetTop);
			//console.log(window.scrollY);
			//console.log(editorHeight);
			const windowHeight = (window.scrollY + window.innerHeight);
			const editorHeight = (this.$refs['editor'].offsetTop + this.$refs['editor'].offsetHeight);

			if(windowHeight > editorHeight){
				this.editorActive = true;
			}else{
				this.editorActive = false;
			}
		});
	}	
}
</script>

<style lang="scss" scoped>
	.editor {
		& {
			border: 1px solid #ccc;
			margin-top: 15px;
			position: relative;
		}

		& > .editor-menu{
			& {
				width: 100%;
				height: auto;
				border-bottom: 1px solid #ccc;
				background-color: $bg-light;
				position: relative;
			}

			& > .pop-link {
				& {
					display: none;
					position: absolute;
					width: 90%;
					height: auto;
					background-color: #fff;
					border: 1px solid #ccc;
					font-size: #{$font-size};
					left: 50%;
					top: 100%;
					z-index: 1;
					@include transform(translateX(-50%));
				}

				&.is-active {
					display: block;
				}

				& > .pop-head {
					width: 100%;
					height: auto;
					padding: 8px 17px;
					background-color: #f1f1f1;
					color: $font-color;
					border-bottom: 1px solid #ccc;
				}

				& > .pop-contents {
					& {
						padding: 15px 17px;
					}

					& > label {
						& {
							padding-bottom: 15px;
							display: block;
						}

						& > p {
							padding-bottom: 5px;
						}
					}

					.form-input {
						height: 35px;
						border: 1px solid #ccc;
					}
				}

				& > .pop-bottom {
					& {
						padding: 0 17px 10px 17px;
					}

					& > button {
						border: 1px solid #ccc;
						background-color: #fff;
						font-size: #{$font-size};
						color: $font-color;
						padding: 7px 20px;
						margin-right: 10px;
						@include transition(all .2s);
						cursor: pointer;
					}

					& > button:nth-child(1) {
						background-color: $bg-orange;
						border: 1px solid $bg-orange;
						color: #fff;
					}

					& > button:nth-child(1):hover {
						border: 1px solid $bg-orange-bold;
						background-color: $bg-orange;
						@include transition(all .2s);
					}

					& > button:nth-child(1):active {
						background-color: $bg-orange-bold;
						@include transition(all .2s);
					}

					& > button:nth-child(2):hover {
						border: 1px solid #bbb;
						@include transition(all .2s);
					}

					& > button:nth-child(1):active {
						background-color: #ccc;
						@include transition(all .2s);
					}

				}
			}

			& > ul {
				& {
					font-size: 0;
					list-style: none;
					padding:3px 15px;
					z-index: 10;
					position: relative;
				}

				& > li {
					& {
						display: inline-block;
						font-size: #{$font-size - 2};
						margin: 3px 0;
						vertical-align: middle;
					}

					&.line {
						padding: 3px 12px;
					}

					&.line:after {
						width:1px;
						height: 13px;
						content: " ";
						display: block;
						background-color: #ccc;
					}

					& > button {
						& {
							border: none;
							background: none;
							cursor: pointer;
							padding: 3px 12px;
							font-size: #{$font-size - 2};
							position: relative;
						}

						& > div.link {
							& {
								position: absolute;
								background-color: #333;
								width: 100%;
								height: 300px;
								left: 0;
								top: 100%;
							}
						}

						& > div.help {
							& {
								display: none;
								position: absolute;
								font-size: #{$font-size - 3};
								font-family: $notoKR-L;
								background-color: #333;
								color: #fff;
								border-radius: 5px;
								top: 100%;
								left: 0;
								margin-top: 6px;
							}

							&:after {
								content: " ";
								display: block;
								position: absolute;
								left: 0;
								bottom: 100%;
								width: 0px;
								height: 0px;
								border-top: 8px solid transparent;
								border-bottom: 8px solid #333;
								border-left: 8px solid transparent;
								border-right: 8px solid transparent;
								margin-left: 10px;
							}

							& > p {
								& {
									padding: 5px 15px;
									white-space: nowrap;
								}
							}
						}

						&:hover div.help {
							display: block;
						}

						&.heading {
							& {
								font-family: $notoKR-M;
								font-size: #{$font-size};
							}
							
							& > div.click {
								position: absolute;
								left: 0;
								top: 100%;
								width: auto;
								text-align: left;
								background-color: #fff;
								border: 1px solid #ccc;
								@include box-shadow(3px 3px 3px rgba(0,0,0,0.1));
								z-index: 1;
								margin-top: 6px;
								padding: 15px;
								white-space: nowrap;
								line-height: 1.5;
								display: none;
								font-family: $notoKR-L;
							}

							&.is-active > div.click {
								display: block;
							}
						}

						&.bold {
							font-family: $notoKR-B;
							font-weight: 700;
							font-size: #{$font-size};
						}

						&.italic {
							font-family: $notoKR-M;
							font-style: italic;
							font-size: #{$font-size};
						}

						&.strike {
							font-family: $notoKR-M;
							text-decoration: line-through;
							font-size: #{$font-size};
						}
					}
				}

				input[type=file] {
					display:none;
				}
				
			}
		}

		& > .editor-content {
			& {
				width: 100%;
				padding-bottom: 100px;
			}

			& >	div {
				& {
					width: 100%;
					min-height: 500px;
				}
			}

			& >	div:after{
				content: " ";
				display: block;
				clear: both;
			}
		}

	}
</style>
<style lang="scss">
		.editor-images {
			& {
				position: fixed;
				bottom: 0;
				background-color: #f1f1f1;
				border: 1px solid #ccc;
				padding: 15px 30px;
				margin-left: -32px;
				width: 840px;
				overflow-x: scroll;
			}
			& > ul {
				& {
					font-size: 0;
					white-space: nowrap;
				}

				& > li {
					& {
						list-style: none;
						display: inline-block;
						overflow: none;
						margin: 0 15px;
						width: 100px;
						height: 100px;
						overflow: hidden;
						border:1px solid #ccc;
					}

					& > div {
						& > img {
							width: 100%;
							height: auto;
						}
					}
				}
			}
		}

		.editor-images.is-active {
			& {
				position: absolute;
				border: 0;
				border-top:1px solid #ccc;
				margin-left: 0;
				left: 0;
				bottom: 0;
				width: 100%;
				display: none;
			}
		}
</style>
