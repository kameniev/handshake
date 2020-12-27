import {LoginScreen, MainScreen, SettingsScreen, Test} from './index';
import React from 'react';
import {NativeRouter, Route, Switch} from 'react-router-native';

export default class Router extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/main" component={MainScreen} />
          <Route exact path="/settings" component={SettingsScreen} />
        </Switch>
      </NativeRouter>
    );
  }
}
