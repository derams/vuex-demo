const _comments = [
    { text: 'fooo' },
    { text: 'barr' }
]
export default {
  getComments (cd) {
    setTimeout(() => cd(_comments), 2000)
  }
}
