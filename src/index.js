import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './redux/store'
import {Provider} from 'react-redux'
import {updateUser} from './redux/actions'

store.dispatch(updateUser('BbangYa'))
  // 순수한 func로 만들어야 함
// const reducer = (state, action) => {
//   console.log(state)
//   console.log(action)
//   if(action.type === 'changeState'){
//     return action.payload.newState
//   }
//   return 'Initial State'
// }

// store 초기화

// action dispatch (액션은 객체)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
