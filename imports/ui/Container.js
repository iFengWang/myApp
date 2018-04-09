import React,{ Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500,cyan700,grey100,grey400,grey500,pinkA200,pink500} from 'material-ui/styles/colors';

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
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    {this.props.contents}
                </div>
            </MuiThemeProvider>
        );
    }
}