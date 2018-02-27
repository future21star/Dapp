module.exports = {
  path: 'dexrenodapp',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/DexrenoDapp').default)
    })
  }
}
