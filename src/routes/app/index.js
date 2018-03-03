module.exports = {
  path: 'app',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/dexrenodapp'),
        require('./routes/dexre-add-property-address'),
        require('./routes/dexre-add-property-address-pop-legal-2'),
        require('./routes/dashboard'),
        require('./routes/verifynew'),
      ])
    })
  },
  getComponent(nextState, cb) {
    console.log('------------------------------app layout get component --------------------------');
    require.ensure([], (require) => {
      cb(null, require('./components/AppLayout').default)
    })
  }
}
  