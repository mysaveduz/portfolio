import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import game from './store/reducers/game';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;



const store = createStore(game, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
      <Provider store={store}>
           <BrowserRouter>
               <App />
           </BrowserRouter>
       </Provider>

);

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
//
//
// import game from './store/reducers/game';
//
// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
//
//
//
// const store = createStore(game, composeEnhancers(
//     applyMiddleware(thunk)
// ));
//
// <Provider store={store}>
//  </Provider>
