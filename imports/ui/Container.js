import React,{ Component } from 'react';
// 主题相关 **********************************
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500,cyan700,grey100,grey400,grey500,pinkA100,pinkA200,pink500, yellow100, lime100, lime500} from 'material-ui/styles/colors';

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
      height: Meteor.isCordova ? 64 : 44,
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
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className='container' zDepth={0}>
                    {this.props.contents}
                </div>
            </MuiThemeProvider>
        );
    }
}