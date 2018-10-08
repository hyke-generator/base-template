import * as React from 'react';
import {Component} from 'react';
import AppNavigator from "./config/navigation/AppNavigator";
import NavigatorService from "./services/NavigatorService";
import {NavigationContainerComponent} from "react-navigation";

export default class App extends Component<{}> {
    render() {
        return (
            <AppNavigator ref={(r: NavigationContainerComponent) => {
                return NavigatorService.setNavigator(r);
            }}/>
        );
    }
}