module.exports = {
  path: 'dexre-add-property-address',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/DexreAddPropertyAddress').default)
    })
  }
}
