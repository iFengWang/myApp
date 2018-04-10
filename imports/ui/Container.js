import React,{ Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500,cyan700,grey100,grey400,grey500,pinkA100,pinkA200,pink500, yellow100, lime100, lime500} from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import IconHome from 'material-ui/svg-icons/communication/business';
import IconChat from 'material-ui/svg-icons/communication/chat';
import IconOa from 'material-ui/svg-icons/communication/call';
import IconMe from 'material-ui/svg-icons/communication/email';

// import FontIcon from 'material-ui/FontIcon';
// const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
// const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink500,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: lime500,
        canvasColor: pinkA100,
    },
    appBar: {
      height: 64,
    },
    bottomNavigation: {
        backgroundColor: pinkA200,
        // unselectedColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
        // selectedColor: palette.primary1Color,
        // height: 56,
        // unselectedFontSize: 12,
        // selectedFontSize: 14
    },
    // spacing:5,
});

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex:0}
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:yellow100}}>
                    <AppBar 
                    title={this.props.title} 
                    titleStyle={{margin:0,textAlign:'center'}}
                    showMenuIconButton={false}
                    zDepth={2}
                    />
                    <div style={{height:550,overflow:'auto'}}>
                        {this.props.contents}
                    </div>
                    <BottomNavigation selectedIndex={this.selectedIndex} zDepth={2}>
                        <BottomNavigationItem
                            label="首页"
                            icon={<IconHome />}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="聊天"
                            icon={<IconChat />}
                            onClick={() => this.select(1)}
                        />
                        <BottomNavigationItem
                            label="OA"
                            icon={<IconOa />}
                            onClick={() => this.select(2)}
                        />
                        <BottomNavigationItem
                            label="我的"
                            icon={<IconMe />}
                            onClick={() => this.select(3)}
                        />
                    </BottomNavigation>
                </div>
            </MuiThemeProvider>
        );
    }
    select = (index) => {
        this.setState({selectedIndex: index});
        switch(this.state.selectedIndex) {
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