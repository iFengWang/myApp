import React,{ Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { ChatMessage } from '../../api/chatMessage.js';
import { withTracker } from 'meteor/react-meteor-data';

import Header from '../Header.js';
import Footer from '../Footer.js';

const styles = {
    content:{
        width:'100%',
        height:(Meteor.isCordova?window.screen.height:window.innerHeight)-(Meteor.isCordova?64:44)-50,
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'flexStart', 
        alignItems:'center', 
        overflow:'auto'
    },
    listStyle:{
        height:(Meteor.isCordova?window.screen.height:window.innerHeight)-(Meteor.isCordova?64:44)-50,
        overflow:'auto',
        width:'100%'
    }
  };

class Chat extends Component {
    render() {
        return (
            <div>
                <Header title={this.props.title} 
                rightButton={
                    <IconButton>
                        <FontIcon className="material-icons md-36">supervisor_account</FontIcon>
                    </IconButton>
                } 
                leftButton={
                    <IconButton onClick={()=>{history.go(-1)}}>
                        <FontIcon className="material-icons md-36">keyboard_arrow_left</FontIcon>
                    </IconButton>
                } />
                <div style={styles.content} ref={ele => this.container=ele}>
                    <List style={styles.listStyle}>
                        {this.props.chatArray.map((chat,index) => (
                            <ListItem key={index}>
                            {false?
                                <div style={{textAlign:'center',paddingBottom:10}}>----------2017-05-07 13:25:30----------</div>:
                                null
                            }
                            {Meteor.userId()===chat.sendId?
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                                    <div className={'triangle-right'}>
                                        {chat.message}
                                    </div>
                                    <div style={{backgroundColor:'transform'}}>
                                        <img src={chat.sendIcon} style={{width:50,height:50}} />
                                    </div>
                                </div> :
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                                    <div style={{backgroundColor:'transform'}}>
                                        <img src={chat.sendIcon} style={{width:50,height:50}} />
                                    </div>
                                    <div className={'triangle-left'}>
                                        {chat.message}
                                    </div>
                                </div>
                            }
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',backgroundColor:'#F75D90',height:50}}>
                    <div style={{width:50}}>
                        <IconButton tooltip="switch">
                            <FontIcon className="material-icons">mic_none</FontIcon>
                        </IconButton>
                    </div>
                    <div>
                        <form onSubmit={this.submitHandler.bind(this)}>
                            <TextField ref='textInput' hintText="请输入发言内容" style={{width:window.innerWidth-50-100}} />
                        </form>
                    </div>
                    <div style={{width:100}}>
                        <IconButton>
                            <FontIcon className="material-icons md-36">insert_emoticon</FontIcon>
                        </IconButton>
                        <IconButton>
                            <FontIcon className="material-icons md-36">add_circle_outline</FontIcon>
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        setTimeout(this.scrollToBottom(),2000);
    }
    componentDidUpdate() {
        setTimeout(this.scrollToBottom(),2000);
    }
    scrollToBottom = () => {
        let ele = this.container.childNodes[0];
        ele.scrollTop = ele.scrollHeight;
        // console.log('1.......',ele.scrollHeight);
    }
    submitHandler(event) {
        event.preventDefault();
        Meteor.call(
            'ChatMessage.insert',
            'sendId',
            'sendname',
            '/images/avatar5.png',
            '',
            '',
            '',
            this.refs.textInput.input.value,
            this.props.groupId
        );
        this.refs.textInput.input.value = '';
        setTimeout(this.scrollToBottom(),2000);
    }
}

export default withTracker((props) => {
    Meteor.subscribe('ChatMessage',props.groupId);
    return {
      chatArray: ChatMessage.find({}).fetch(),
    };
  })(Chat);