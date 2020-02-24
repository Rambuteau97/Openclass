import React from "react";
import Navigation from "./Navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      //distribue votre store à toute votre application
      <Provider store={Store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    );
  }
}