import React,{ Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500,cyan700,grey100,grey400,grey500,pinkA200,pink500, yellow100} from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

// import Home from './Home.js';
// import Im from './Im.js';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink500,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: cyan700,
        canvasColor: pink500,
    },
    appBar: {
      height: 44,
    },
    // bottomNavigation: {
        // backgroundColor: muiTheme.palette.primary1Color,
        // unselectedColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
        // selectedColor: palette.primary1Color,
        // height: 56,
        // unselectedFontSize: 12,
        // selectedFontSize: 14
    // },
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
                <div style={{display:'flex', display:'-webkit-flex', flex:'flex-grow', flexGrow:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:yellow100}}>
                    <AppBar 
                    title={this.props.title} 
                    titleStyle={{margin:0,textAlign:'center'}}
                    showMenuIconButton={false}
                    zDepth={2}
                    />
                    <div style={{height:550}}>
                        {this.props.contents}
                    </div>
                    <BottomNavigation selectedIndex={this.selectedIndex}>
                        <BottomNavigationItem
                            label="Recents"
                            icon={recentsIcon}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="Favorites"
                            icon={favoritesIcon}
                            onClick={() => this.select(1)}
                        />
                        <BottomNavigationItem
                            label="Nearby"
                            icon={nearbyIcon}
                            onClick={() => this.select(2)}
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
                FlowRouter.go('/vvv');
                break;
            default:
                FlowRouter.go('/home');
        }
    }
}