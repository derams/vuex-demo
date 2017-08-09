import * as types from '../mutation-type'

const state = {
  all: [
    { text: 'foot' },
    { text: 'barr' }
  ]
}
const mutation = {
  [types.ADD_COMMENT] (state, { text }) {
    state.all.push({ text })
  }
}
export default {
  state,
  mutation
}
