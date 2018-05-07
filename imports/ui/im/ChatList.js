import React,{ Component } from 'react';
import { ChatGroup } from '../../api/chatGroup.js';
import { withTracker } from 'meteor/react-meteor-data';
import Badge from 'material-ui/Badge';

// import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class ChatList extends Component {
    render() {
        return (
            <List style={{width:'100%'}}>
                {this.props.chatGroup.map((chat,index) => (
                    <ListItem
                        primaryText={chat.groupName}
                        secondaryText="群的最后一条消息在此显示，过多内容就会省略，不信你看看"
                        leftAvatar={<Avatar src={chat.groupIcon} />}
                        rightIcon={
                            <Badge
                            badgeContent={'99+'}
                            secondary={true}
                            badgeStyle={{top: 0, right: 5, width:30}}>
                            </Badge>
                        }
                        onClick={()=>FlowRouter.go('/im/chat/'+chat._id+'?title='+chat.groupName)}
                        style={{borderBottom:'dotted 1px #FF0000'}}
                    />
                ))}
            </List>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('ChatGroup');
    return {
      chatGroup: ChatGroup.find({},{sort:{createAt:-1}}).fetch(),
    };
  })(ChatList);