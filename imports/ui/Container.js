import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';

// 底部切换 **********************************
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
// import IconHome from 'material-ui/svg-icons/communication/business';
// import IconChat from 'material-ui/svg-icons/communication/chat';
// import IconOa from 'material-ui/svg-icons/communication/call';
// import IconMe from 'material-ui/svg-icons/communication/email';

import FontIcon from 'material-ui/FontIcon';
const IconHome = <FontIcon className="material-icons" style={{marginRight:15}} color={lime100} hoverColor={pink500}>business</FontIcon>;
const IconChat = <FontIcon className="material-icons" style={{marginRight:15}} color={lime100} hoverColor={pink500}>chat</FontIcon>;
const IconOa = <FontIcon className="material-icons" style={{marginRight:15}} color={lime100} hoverColor={pink500}>call</FontIcon>;
const IconMe = <FontIcon className="material-icons" style={{marginRight:15}} color={lime100} hoverColor={pink500}>email</FontIcon>;

import Paper from 'material-ui/Paper';

// 下拉菜单 **********************************
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
const MenuButton = 
<IconMenu 
iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} 
anchorOrigin={{horizontal: 'right', vertical: 'top'}} 
targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Send feedback" />
    <MenuItem primaryText="Settings" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
</IconMenu>;

// 左侧边栏 **********************************
import Drawer from 'material-ui/Drawer';

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
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:0,
            open:false
        }
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Paper style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:yellow100, overflow:'hidden'}} zDepth={1}>
                    <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})} >
                        <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                        <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                    </Drawer>

                    <AppBar 
                    title={this.props.title} 
                    titleStyle={{margin:0,textAlign:'center'}}
                    style={{paddingTop:Meteor.isCordova?8:0}}
                    showMenuIconButton={true}
                    iconElementRight={MenuButton}
                    onLeftIconButtonClick={()=> this.setState({open:true})}
                    zDepth={2} />
                    <Paper style={{height:550,width:'100%',overflow:'auto',display:'flex', flexDirection:'column', alignItems:'center'}}>
                        {this.props.contents}
                    </Paper>
                    <BottomNavigation selectedIndex={this.selectedIndex} zDepth={2}>
                        <BottomNavigationItem
                            label="首页"
                            icon={IconHome}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="聊天"
                            icon={IconChat}
                            onClick={() => this.select(1)}
                        />
                        <BottomNavigationItem
                            label="OA"
                            icon={IconOa}
                            onClick={() => this.select(2)}
                        />
                        <BottomNavigationItem
                            label="我的"
                            icon={IconMe}
                            onClick={() => this.select(3)}
                        />
                    </BottomNavigation>
                </Paper>
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