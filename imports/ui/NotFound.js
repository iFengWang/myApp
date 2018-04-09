import React,{ Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class NotFound extends Component {
    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'#00FF00'}}>
                哥们走错路了！^_^ <br />
                <RaisedButton label='返回' onClick={this.onClickButton} />
            </div>
        );
    }
    onClickButton = () => {FlowRouter.go('/home')}
}