import React,{ Component } from 'react';

// import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends Component {
    render() {
        return (
            <List style={{width:'100%'}}>
                <ListItem
                    primaryText="太阳班聊天群"
                    secondaryText="群的最后一条消息在此显示"
                    leftAvatar={<Avatar src="images/avatar1.png" />}
                    rightIcon={<CommunicationChatBubble />}
                    style={{border:'dotted 1px #FF0000'}}
                />
                <ListItem
                    primaryText="月亮班聊天群"
                    secondaryText="群的最后一条消息在此显示"
                    leftAvatar={<Avatar src="images/avatar2.png" />}
                    rightIcon={<CommunicationChatBubble />}
                    style={{border:'dotted 1px #FF0000'}}
                />
                <ListItem
                    primaryText="地球班聊天群"
                    secondaryText="群的最后一条消息在此显示"
                    leftAvatar={<Avatar src="images/avatar1.png" />}
                    rightIcon={<CommunicationChatBubble />}
                    style={{border:'dotted 1px #FF0000'}}
                />
                <ListItem
                    primaryText="火星班聊天群"
                    secondaryText="群的最后一条消息在此显示"
                    leftAvatar={<Avatar src="images/avatar2.png" />}
                    rightIcon={<CommunicationChatBubble />}
                    style={{border:'dotted 1px #FF0000'}}
                />
            </List>
        );
    }
}