import { Node } from 'tiptap'
import { wrappingInputRule, toggleList } from 'tiptap-commands'

export default class CheckBox extends Node {

  get name() {
    return 'check_item'
  }

  get schema() {
    return {
      attrs: {
        order: {
          default: 1,
        },
      },
      content: 'check_list+',
      group: 'block',
      parseDOM: [
        {
          tag: 'ul',
          getAttrs: dom => ({
            order: dom.hasAttribute('start') ? +dom.getAttribute('start') : 1,
          }),
        },
      ],
      toDOM: node => (node.attrs.order === 1 ? ['ul', { class: 'checkbox' }, 0] : ['ul', { start: node.attrs.order, class: 'checkbox' }, 0]),
    }
  }

  commands({ type, schema }) {
    return () => toggleList(type, schema.nodes.check_item)
  }

  inputRules({ type }) {
    return [
      wrappingInputRule(
        /^(\d+)\.\s$/,
        type,
        match => ({ order: +match[1] }),
        (match, node) => node.childCount + node.attrs.order === +match[1],
      ),
    ]
  }

}
