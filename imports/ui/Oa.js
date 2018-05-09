import React,{ Component } from 'react';
import TaskList from './TaskList.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { yellow500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './Header.js';
import Footer from './Footer.js';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Calendar from 'react-calendar';
import {List, ListItem} from 'material-ui/List';
import Badge from 'material-ui/Badge';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

const styles = {
    content:{
        width:'100%',
        height:(Meteor.isCordova?window.screen.height:window.innerHeight)-(Meteor.isCordova?64:44)-50,
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'flexStart', 
        alignItems:'center', 
        overflow:'auto'
    }
  };

export default class Oa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex:0,
            date:new Date()
        };
    }
    render() {
        return (
            <div>
                <Header title={
                    <Tabs 
                    onChange={(value)=> this.setState({slideIndex:value})} 
                    value={this.state.slideIndex} 
                    inkBarStyle={{backgroundColor:yellow500}}
                    style={{paddingTop:Meteor.isCordova?8:0,width:'100%'}}>
                        <Tab label="今天" value={0} />
                        <Tab label="工作圈" value={1} />
                        <Tab label="仪表盘" value={2} />
                    </Tabs>
                } 
                rightButton={
                    <IconMenu 
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} 
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}} 
                        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                        <MenuItem primaryText="添加日程" onClick={(event)=>{
                            this.setState({groupDialog:true})
                        }}/>
                        <MenuItem primaryText="发布圈子" onClick={(event)=>{
                            //
                        }}/>
                    </IconMenu>
                }/>
                <div style={styles.content}>
                    <SwipeableViews 
                    index={this.state.slideIndex} 
                    onChangeIndex={(value)=> this.setState({slideIndex:value})} 
                    style={{width:'100%',height:'100%'}}>
                        <div>
                            <Calendar
                                onChange={this.onChange}
                                value={this.state.date}
                                className='calendarStyle'
                            />
                            <List style={{width:'100%'}}>
                                <ListItem
                                    // primaryText={'标题在此'}
                                    secondaryText="群的最后一条消息在此显示，过多内容就会省略，不信你看看"
                                    // leftAvatar={<Avatar src='images/avatar5.png' />}
                                    leftIcon={<FontIcon className="material-icons md-36">create</FontIcon>}
                                    rightIcon={
                                        <FontIcon className="material-icons md-36">keyboard_arrow_right</FontIcon>
                                    }
                                    // onClick={()=>FlowRouter.go('/im/chat/'+chat._id+'?title='+chat.groupName)}
                                    style={{borderBottom:'dotted 1px #FF0000'}}
                                />
                                <ListItem
                                    // primaryText={'标题在此'}
                                    secondaryText="群的最后一条消息在此显示，过多内容就会省略，不信你看看"
                                    // leftAvatar={<Avatar src='images/avatar5.png' />}
                                    leftIcon={<FontIcon className="material-icons md-36">create</FontIcon>}
                                    rightIcon={
                                        <FontIcon className="material-icons md-36">keyboard_arrow_right</FontIcon>
                                    }
                                    // onClick={()=>FlowRouter.go('/im/chat/'+chat._id+'?title='+chat.groupName)}
                                    style={{borderBottom:'dotted 1px #FF0000'}}
                                />
                                <ListItem
                                    // primaryText={'标题在此'}
                                    secondaryText="群的最后一条消息在此显示，过多内容就会省略，不信你看看"
                                    // leftAvatar={<Avatar src='images/avatar5.png' />}
                                    leftIcon={<FontIcon className="material-icons md-36">create</FontIcon>}
                                    rightIcon={
                                        <FontIcon className="material-icons md-36">keyboard_arrow_right</FontIcon>
                                    }
                                    // onClick={()=>FlowRouter.go('/im/chat/'+chat._id+'?title='+chat.groupName)}
                                    style={{borderBottom:'dotted 1px #FF0000'}}
                                />
                                <ListItem
                                    // primaryText={'标题在此'}
                                    secondaryText="群的最后一条消息在此显示，过多内容就会省略，不信你看看"
                                    // leftAvatar={<Avatar src='images/avatar5.png' />}
                                    leftIcon={<FontIcon className="material-icons md-36">create</FontIcon>}
                                    rightIcon={
                                        <FontIcon className="material-icons md-36">keyboard_arrow_right</FontIcon>
                                    }
                                    // onClick={()=>FlowRouter.go('/im/chat/'+chat._id+'?title='+chat.groupName)}
                                    style={{borderBottom:'dotted 1px #FF0000'}}
                                />
                            </List>
                        </div>
                        <div>
                            第二个选项卡
                        </div>
                        <div>
                            第三个选项卡
                        </div>
                    </SwipeableViews>
                </div>
                
                <Footer selectedIndex={2} />
            </div>
        );
    }

    onChange = (date) => {
        this.setState({date})
    }
}