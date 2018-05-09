import React,{ Component } from 'react';
import TaskList from './TaskList.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { yellow500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './Header.js';
import Footer from './Footer.js';

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
        this.state = {slideIndex:0};
    }
    render() {
        return (
            <div>
                <Header title='oa' />
                <div style={styles.content}>
                    <RaisedButton 
                    label="地图" 
                    secondary={true} 
                    style={{margin:5,width:'100%'}}
                    onClick={() => FlowRouter.go('/oa/map')}/>

                    <RaisedButton 
                    label="自定义注册" 
                    secondary={true} 
                    style={{margin:5}}
                    onClick={() => FlowRouter.go('/account/register')}/>

                    <RaisedButton 
                    label="添加邮箱" 
                    secondary={true} 
                    style={{margin:5}}
                    onClick={() => {
                        Meteor.call('mail.action','add');
                    }}/>
                    <RaisedButton 
                    label="删除邮箱" 
                    secondary={true} 
                    style={{margin:5}}
                    onClick={() => {
                        Meteor.call('mail.action','remove');
                    }}/>
                    <RaisedButton 
                    label="发送验证邮件" 
                    secondary={true} 
                    style={{margin:5}}
                    onClick={() => {
                        Meteor.call('mail.action','sendVerify');
                    }}/>
                    <RaisedButton 
                    label="发送普通邮件" 
                    secondary={true} 
                    style={{margin:5}}
                    onClick={() => {
                        Meteor.call('mail.action','sendMail');
                    }}/>

                    <div>
                        <TaskList />
                    </div>

                    <div>
                        <Tabs onChange={(value)=> this.setState({slideIndex:value})} value={this.state.slideIndex} inkBarStyle={{backgroundColor:yellow500}} >
                            <Tab label="今天" value={0} />
                            <Tab label="工作圈" value={1} />
                            <Tab label="仪表盘" value={2} />
                        </Tabs>
                        <SwipeableViews index={this.state.slideIndex} onChangeIndex={(value)=> this.setState({slideIndex:value})} style={{border:'solid 1px #F00'}}>
                            <div>
                                <h2>Tabs with slide effect</h2>
                                Swipe to see the next slide.<br />
                            </div>
                            <div>
                                第二个选项卡
                            </div>
                            <div>
                                第三个选项卡
                            </div>
                        </SwipeableViews>
                    </div>
                </div>
                <Footer selectedIndex={2} />
            </div>
        );
    }
}