import { Mark } from 'tiptap'
import { updateMark, removeMark, pasteRule } from 'tiptap-commands'
import { getMarkAttrs } from 'tiptap-utils'

export default class HyperLink extends Mark {

	get name() {
		return 'hyperlink'
	}

	get schema() {
		return {
			attrs: {
				href: {
					default: null,
				},
				text: {
					default: null,
				}
			},
			inclusive: false,
			parseDOM: [
				{
					tag: 'a[href]',
					getAttrs: dom => ({
						href: dom.getAttribute('href'),
					}),
				},
			],
			toDOM: node => ['a', {
				...node.attrs,
				rel: 'noopener noreferrer nofollow',
			}, 0],
		}
	}

	commands({ type }) {
		
		return attrs => {
			if (attrs.href) {
				return updateMark(type, attrs)
			}

			return removeMark(type)
		}
	}

	pasteRules({ type }) {
		return [
			pasteRule(
				/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-zA-Z]{2,}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
				type,
				url => ({ href: url }),
			),
		]
	}

}
