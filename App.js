/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store'
import MainComponent from './components/MainComponent/MainComponent';
import Navigation from './navigation/MainNavigation'
function App() {
  const store = configureStore()
  return (
    <Provider store ={store}>
      <Navigation />
    </Provider>
  )
}
export default App;
