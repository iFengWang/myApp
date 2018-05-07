import React,{ Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { ChatMessage } from '../../api/chatMessage.js';
import { withTracker } from 'meteor/react-meteor-data';

class Chat extends Component {
    render() {
        return (
            <div>
                <List style={{height:490,overflow:'auto'}}>
                    {this.props.chatArray.map((chat,index) => (
                        <ListItem key={index}>
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
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',backgroundColor:'#F75D90'}}>
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
                            <FontIcon className="material-icons">insert_emoticon</FontIcon>
                        </IconButton>
                        <IconButton>
                            <FontIcon className="material-icons">add_circle_outline</FontIcon>
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }
    submitHandler(event) {
        event.preventDefault();
        // const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Meteor.call(
            'ChatMessage.insert',
            'sendId',
            '/images/avatar5.png',
            'sendname',
            '',
            '',
            '',
            '好人一生平安，我们都有一个家，名字叫中国，兄弟姐妹都很多，景色也不错，家里盘着两条龙，长江与黄河，还有那珠穆朗玛峰是最高的山峰',
            this.props.groupId
        );
        // ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }
}

export default withTracker((props) => {
    Meteor.subscribe('ChatMessage',props.groupId);
    return {
      chatArray: ChatMessage.find({}).fetch(),
    };
  })(Chat);