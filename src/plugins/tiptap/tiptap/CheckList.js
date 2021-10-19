import { Node } from 'tiptap'
import { splitListItem, liftListItem, sinkListItem } from 'tiptap-commands'

export default class CheckItem extends Node {

  get name() {
    return 'check_list'
  }

  get schema() {
    return {
      content: 'paragraph block*',
      defining: true,
      draggable: false,
      parseDOM: [
        { tag: 'li' },
      ],
      toDOM: () => [
        'li',
        ['label',
          ['input',
            { contenteditable: 'false', type: 'checkbox', class: 'checkbox_input' }
          ],
          ['div', { class: 'checkbox_icon' }, [
            'div', [
              'div'
            ]
          ]],
          ['div', { class: 'checkbox_text' },0]
        ]
      ],
    }
  }

  commands({ type, schema }) {
    console.log(schema);
    return () => toggleList(type)
  }

  keys({ type }) {
    return {
      Enter: splitListItem(type),
      Tab: sinkListItem(type),
      'Shift-Tab': liftListItem(type),
    }
  }

}
