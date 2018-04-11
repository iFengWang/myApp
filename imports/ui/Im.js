import React,{ Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import Dialog from 'material-ui/Dialog';

import { withTracker } from 'meteor/react-meteor-data';
import '../api/users.js';
import { grey500 } from 'material-ui/styles/colors';

class Im extends Component {
    constructor(props) {
        super(props);
        this.state = {openDialog:false};
    }

    renderUsers() {
        return this.props.userArray.map((u) => (<li>{u.username}</li>));
    }

    render() {
        return (
            <div>
                <TextField id="text-field-default" hintText="placeholder" defaultValue="Default Value" floatingLabelText="Floating Label Text" floatingLabelFixed={true}/><br />
                <TextField hintText="Password Field" floatingLabelText="Password" type="password" /><br />
                <TextField hintText="MultiLine with rows: 2 and rowsMax: 4" multiLine={true} rows={2} rowsMax={4} /><br />
                <br />
                <Checkbox label="one" />
                <Checkbox label="two" />
                <Checkbox label="three" checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />}/>
                <br />
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                    <RadioButton
                        value="light"
                        label="Simple" />
                    <RadioButton
                        value="not_light"
                        label="Selected by default"/>
                    <RadioButton
                        value="ludicrous"
                        label="Custom icon"
                        checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
                        uncheckedIcon={<ActionFavoriteBorder />} />
                </RadioButtonGroup>
                <br />
                <RaisedButton label="登录" secondary={true} style={{margin:5}} onClick={(e) => this.setState({openDialog:true})}/>
                <RaisedButton label="注册" secondary={true} style={{margin:5}} onClick={(e) => this.setState({openDialog:true})}/>
                {this.showDialog()}
                <br />
                <DatePicker hintText="Portrait Dialog" />
                <DatePicker hintText="Landscape Dialog" mode="landscape" />
                <DatePicker hintText="Dialog Disabled" disabled={true} />
                <DatePicker hintText="Open to Year" openToYearSelection={true} />
            </div>
        );
    }

    showDialog() {
        const actions = [
            <RaisedButton
              label="确定"
              primary={true}
              style={{margin:5}}
              onClick={()=>this.setState({openDialog:false})}
            />,
            <RaisedButton
              label="取消"
              primary={true}
              disabled={true}
              style={{margin:5}}
              disabledBackgroundColor={grey500}
              onClick={()=>this.setState({openDialog:false})}
            />,
          ];
        return (
            <Dialog 
            title="温馨提示" 
            actions={actions} 
            modal={true} 
            contentStyle={{borderRadius:10,overflow:'hidden',boxShadow:'0px 3px 3px #666'}}
            autoScrollBodyContent={false}
            open={this.state.openDialog}>
                内容在此。。。。
            </Dialog>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('UserList');
    return {
      userArray: Meteor.users.find({}).fetch(),
    };
  })(Im);