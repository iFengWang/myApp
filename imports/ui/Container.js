import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { T } from '../i18n';

import { Photos } from '../api/photos';

// 底部切换 **********************************
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
    <MenuItem primaryText="拍照片" onClick={(event)=>{
        MeteorCamera.getPicture({width:window.screen.width, height:window.screen.height,quality:100}, function(error,data){
            if(!error) {
                Meteor.call('photos.insert',{
                    title:'haha',
                    img:data,
                    author:'xiaofeng',
                    createAt:new Date()
                });
            } else {
                console.log('error......'+error);
            }
        });
    }}/>
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

const styles = {
    container:{
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:yellow100, 
        overflow:'hidden'
    },
    content:{
        width:window.innerWidth,
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'flexStart', 
        alignItems:'center', 
        overflow:'auto',
        height:(Meteor.isCordova?window.screen.height:window.innerHeight)-(Meteor.isCordova?64:44)-49
    }
}

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
            <div style={styles.container} zDepth={0}>
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
                    titleStyle={{textAlign:'center'}}
                    style={{paddingTop:Meteor.isCordova?8:0,height:Meteor.isCordova?64:44}}
                    showMenuIconButton={true}
                    iconElementRight={MenuButton}
                    onLeftIconButtonClick={()=> this.setState({open:true})}
                    zDepth={2} />
                    <div style={styles.content}>
                        {this.props.contents}
                    </div>
                    <BottomNavigation selectedIndex={this.state.selectedIndex} zDepth={2} style={{height:49}}>
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
                </div>
            </MuiThemeProvider>
        );
    }
    select(index) {
        this.setState({selectedIndex: index});
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