import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class TaskList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <input type='text' ref='textInput' placeholder='请输入内容' />
                </form>

                <Badge badgeContent={4} primary={true} badgeStyle={{top: 15, right: 15}}>
                    <IconButton tooltip="通知"><NotificationsIcon /></IconButton>
                </Badge>

                <List>
                    {this.renderTasks()}
                </List>
            </div>
        );
    }
    renderTasks() {
        return this.props.tasks.map((task) => (
            <ListItem 
            primaryText={task.text} 
            leftIcon={<ContentInbox />} 
            innerDivStyle={{border:'solid 1px #FF0000',margin:5}}/>
        ));
    }
    submitHandler(event) {
        event.preventDefault();
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Meteor.call('tasks.insert',text);
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }
}

export default withTracker(() => {
    Meteor.subscribe('AllTasks');
    return {
      tasks: Tasks.find({},{sort:{createAt:-1}}).fetch(),
    };
  })(TaskList);