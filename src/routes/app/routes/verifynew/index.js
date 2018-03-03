module.exports = {
  path: 'verifynew',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/VerifyNew').default)
    })
  }
}
