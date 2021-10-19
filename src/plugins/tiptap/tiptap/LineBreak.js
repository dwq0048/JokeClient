import { Node } from 'tiptap'
import { chainCommands, exitCode } from 'tiptap-commands'

export default class linebreak extends Node {

  get name() {
    return 'linebreak'
  }

  get schema() {
    return {
      content: 'block+',
      group: 'block',
      selectable: false,
      parseDOM: [
        { tag: 'hr' },
      ],
      toDOM: () => ['hr'],
    }
  }

  commands({ type, schema }) {
    const command = chainCommands(exitCode, (state, dispatch) => {
      dispatch(state.tr.replaceSelectionWith(type.create()).scrollIntoView())
      return true
    })

    return () => command;
  }

}
