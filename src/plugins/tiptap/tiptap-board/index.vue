<template>
	<div class="editor" ref="editor">
		<div class="editor-content">
			<editor-content :editor="editor" />
		</div>
	</div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'

export default {
	name: 'tip-tap-editor',
	props: ['editor'],
	components: {
		EditorContent,
	},
	data() {
		return {
			faQuoteLeft, faCheckSquare, 
			
			varActive : {
				head : false,
				link : false
			},
			postData : '',
			address : '',
		}
	},
	methods: {

	},
	beforeDestroy() {
		this.editor.destroy()
	},
}
</script>

<style lang="scss" scoped>
	.editor {
		& {
			position: relative;
			padding: 15px 30px 0 30px;
		}

		& > .editor-content {
			& {
				width: 100%;
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
		.ProseMirror {
			min-height: 500px;
			padding: 15px;
			font-size: #{$font-size};
		}
		
		.ProseMirror img {
			max-width: 100%;
		}
</style>
