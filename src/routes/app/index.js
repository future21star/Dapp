module.exports = {
  path: 'app',
  getChildRoutes(partialNextState, cb) {
    console.log('------------------------------app layout get child routes --------------------------');
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/dexrenodapp'),
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
  