import * as React from 'react';
import {Component} from 'react';
import AppNavigator from "./navigation/AppNavigator";
import NavigatorService from "./services/NavigatorService";
import {NavigationContainerComponent} from "react-navigation";
import {Provider} from "react-redux";
import store from "./config/store";

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator ref={(r: NavigationContainerComponent) => {
                    return NavigatorService.setNavigator(r);
                }}/>
            </Provider>
        );
    }
}