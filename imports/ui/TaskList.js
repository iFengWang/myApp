import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

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