import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { DrizzleProvider } from 'drizzle-react'

// // Layouts
// import App from './App'
// import HomeContainer from './layouts/home/HomeContainer'
// import LoadingContainer from './layouts/loading/LoadingContainer'
// // Containers
// import Dashboard from './pages/dashboard/Dashboard';

// Contracts
import ComplexStorage from './../build/contracts/ComplexStorage.json'
import SimpleStorage from './../build/contracts/SimpleStorage.json'
import TutorialToken from './../build/contracts/TutorialToken.json'

// Redux Store
import store from './store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Set Drizzle options.
const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    ComplexStorage,
    SimpleStorage,
    TutorialToken
  ],
  events: {
    SimpleStorage: ['StorageSet']
  }
}

// ReactDOM.render((
//     <DrizzleProvider options={options}>
//       <Provider store={store}>
//         <App />
//         <LoadingContainer>
//           <Router history={history}>
//             <Route path="/" component={App}>
//               <IndexRoute component={HomeContainer} />
//               <Route path="/dashboard" component={Dashboard} />
//             </Route>
//           </Router>
//         </LoadingContainer>
//       </Provider>
//     </DrizzleProvider>
//   ),
//   document.getElementById('root')
// );

function scrollToTop() {
  window.scrollTo(0, 0);
}

const rootRoute = {
  path: '/',
  component: require('./containers/App').default,
  indexRoute: { onEnter: (nextState, replace) => replace('/app/dexre-add-property-address-pop-legal-2') },
  childRoutes: [
    require('./routes/app'),
    // require('./routes/404'),
    // require('./routes/500'),
    // require('./routes/forgotPassword'),
    // require('./routes/login'),
    // require('./routes/signUp'),
    // require('./routes/fullscreen'),
    // {
    //   path: '*',
    //   indexRoute: { onEnter: (nextState, replace) => replace('/404') },
    // }
  ]
}

ReactDOM.render((  
  <Provider store={store}>
    <Router
      onUpdate={scrollToTop}
      history={history}
      routes={rootRoute}
    />
  </Provider>)
, document.getElementById('root')
)