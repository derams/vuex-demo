import * as types from '../mutation-types'
import comment from '../../api/comment'
const mutations = {
  [types.ADD_COMMENT] (state, { text }) {
    state.all.push({ text })
  }
}
let state = {
  all: []
}
const actions = {
  getAllPosts ({ commit }) {
    comment.getComments(comments => {
      console.log('in actions', comments)
      commit(types.LOAD_COMMENTS, { comments })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
