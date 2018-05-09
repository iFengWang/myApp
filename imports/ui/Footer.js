import React,{ Component } from 'react';
import { T } from '../i18n';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
// import Home from 'material-ui/svg-icons/communication/business';
// import Chat from 'material-ui/svg-icons/communication/chat';
// import Oa from 'material-ui/svg-icons/communication/call';
// import Me from 'material-ui/svg-icons/communication/email';
// const IconHome = <Home />;
// const IconChat = <Chat />;
// const IconOa = <Oa />;
// const IconMe = <Me />;

import FontIcon from 'material-ui/FontIcon';
const IconHome = <FontIcon className="material-icons">business</FontIcon>;
const IconChat = <FontIcon className="material-icons">chat</FontIcon>;
const IconOa = <FontIcon className="material-icons">call</FontIcon>;
const IconMe = <FontIcon className="material-icons">email</FontIcon>;

export default class Footer extends Component {
    render() {
        return (
            <BottomNavigation selectedIndex={this.props.selectedIndex} zDepth={2} style={{height:50}}>
                        <BottomNavigationItem
                            label={<T>home</T>}
                            icon={IconHome}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label={<T>chat</T>}
                            icon={IconChat}
                            onClick={() => this.select(1)}
                        />
                        <BottomNavigationItem
                            label={<T>office</T>}
                            icon={IconOa}
                            onClick={() => this.select(2)}
                        />
                        <BottomNavigationItem
                            label={<T>me</T>}
                            icon={IconMe}
                            onClick={() => this.select(3)}
                        />
                    </BottomNavigation>
        );
    }
    select(index) {
        switch(index) {
            case 0:
                FlowRouter.go('/home');
                break;
            case 1:
                FlowRouter.go('/im');
                break;
            case 2:
                FlowRouter.go('/oa');
                break;
            case 3:
                FlowRouter.go('/me');
                break;
            default:
                FlowRouter.go('/home');
        }
    }
}