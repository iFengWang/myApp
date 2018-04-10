import React,{ Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import { withTracker } from 'meteor/react-meteor-data';

class Im extends Component {

    renderUsers() {
        this.props.userList.map((u) => <li>{u.username}</li>);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderUsers.bind(this)}
                </ul>

                <TextField
                hintText="Hint Text"
                /><br />
                <br />
                <TextField
                hintText="The hint text can be as long as you want, it will wrap."
                /><br />
                <TextField
                id="text-field-default"
                defaultValue="Default Value"
                /><br />
                <TextField
                hintText="Hint Text"
                floatingLabelText="Floating Label Text"
                /><br />
                <TextField
                defaultValue="Default Value"
                floatingLabelText="Floating Label Text"
                /><br />
                <TextField
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}
                /><br />
                <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                /><br />
                <TextField
                hintText="MultiLine with rows: 2 and rowsMax: 4"
                multiLine={true}
                rows={2}
                rowsMax={4}
                /><br />
                <TextField
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiLine={true}
                rows={2}
                /><br />
                <TextField
                hintText="Full width"
                fullWidth={true}
                />

                <DatePicker hintText="Portrait Dialog" />
                <DatePicker hintText="Landscape Dialog" mode="landscape" />
                <DatePicker hintText="Dialog Disabled" disabled={true} />
                <DatePicker hintText="Open to Year" openToYearSelection={true} />
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('UserList');
    return {
      userList: Meteor.users.find({}).fetch(),
    };
  })(Im);