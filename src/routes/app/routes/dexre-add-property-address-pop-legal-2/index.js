module.exports = {
  path: 'dexre-add-property-address-pop-legal-2',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/DexreAddPropertyAddressPopLegal2').default)
    })
  }
}
