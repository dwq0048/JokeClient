import { Node } from 'tiptap'
import { wrappingInputRule, setBlockType, toggleWrap } from 'tiptap-commands'

const test = (styleAttr) => {
  let result = '';
  const styleArray = styleAttr ? styleAttr.split(';') : [];

  styleArray.forEach(function(value) {
    const v = value.split(':');

    if (v.length === 2) {
      const key = v[0].toLowerCase().trim();
      const value = v[1].toLowerCase().trim();
    
      if(key == 'text-align' && ( value == 'left' || value == 'center' || valye == 'right' )){
        result += key + ': ' + value + ';'
      }
    }
  });

  return result;
}

export default class AlignLeft extends Node {

  get name() {
    return 'aligncenter'
  }

  get schema() {
    return {
      content: 'block+',
      group: 'block',
      defining: true,
      draggable: false,
      parseDOM: [
        {
          tag: 'p',

          getAttrs: dom => ({
            style: test(dom.getAttribute('style'))
          })

        },
      ],
      toDOM: () => ['p', { style: 'text-align: center' }, 0],
    }
  }

  commands({ type, schema }) {
    return () => toggleWrap(type)
  }

  keys({ type }) {
    return {
      'Ctrl->': toggleWrap(type),
    }
  }

  inputRules({ type }) {
    return [
      wrappingInputRule(/^\s*>\s$/, type),
    ]
  }

}