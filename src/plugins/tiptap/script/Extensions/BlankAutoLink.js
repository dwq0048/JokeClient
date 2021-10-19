import { markInputRule } from 'tiptap-commands'
import { Link } from 'tiptap-extensions'

export default class BlankAutoLink extends Link {
  get schema () {
    return {
      ...super.schema,
      toDOM: node => ['a', {
        ...node.attrs,
        rel: 'noopener noreferrer nofollow',
        target: '_blank',
      }, 0],
    }
  }

  inputRules ({ type }) {
    return [
      markInputRule(
        /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*))\s$/g,
        type,
        matches => {
          return { href: matches[1] }
        }
      ),
    ]
  }
}