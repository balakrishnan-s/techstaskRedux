/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common'

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View >
          <Header headerText="Tech Stack"></Header>
          <Text>wdwedw</Text>
        </View>
      </Provider>
    );
  }
}


export default  App;
