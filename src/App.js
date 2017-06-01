import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyCWQ97vqqU1j4MVrtzvipJjVOHB1PUtAbM",
    authDomain: "manage-96bed.firebaseapp.com",
    databaseURL: "https://manage-96bed.firebaseio.com",
    projectId: "manage-96bed",
    storageBucket: "manage-96bed.appspot.com",
    messagingSenderId: "521366986065"
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
  }
}

export default App;
