import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    content:{
        width:'100%',
        height:(Meteor.isCordova?window.screen.height:window.innerHeight),
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'flexStart', 
        alignItems:'center', 
        overflow:'auto'
    }
  };

export default class RegisterUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail:'',
            pwd1:'',
            pwd2:'',
        };
    }
    render() {
        return (
            <div style={styles.content}>
                <TextField 
                hintText="邮箱格式应为：*@*.*"
                floatingLabelText="请输入您的email" 
                value={this.state.mail}
                onChange={(event,newValue)=>this.setState({mail:newValue})}
                style={{width:300}}
                 />
                <TextField 
                hintText="密码是不少于8位的字母数据或符号组合"
                floatingLabelText="请输入密码" 
                type="password" 
                value={this.state.pwd1}
                onChange={(event,newValue)=>this.setState({pwd1:newValue})}
                style={{width:300}} /><br />
                <TextField 
                floatingLabelText="再次输入密码" 
                type="password" 
                value={this.state.pwd2}
                onChange={(event,newValue)=>this.setState({pwd2:newValue})}
                style={{width:300}} /><br />

                <RaisedButton label="注册" 
                secondary={true} 
                style={{marginTop:20, width:300}}
                onClick={this.createUser.bind(this)} />

                <div style={{marginTop:100}}>
                    <FlatButton label="登录" style={{margin:10}} onClick={()=> FlowRouter.go('/account/login')} />
                    <FlatButton label="忘记密码" style={{margin:10}} />
                </div>
            </div>
        );
    }
    createUser() {
        //验证格式
        // const dict = {
        //     email:this.state.mail,
        //     password:this.state.pwd1,
        //     profile:{
        //         icon:'http://www.baidu.com/icon.png',
        //         info:'个人信息描述',
        //     }
        // }
        Meteor.call('user.create', this.state.mail, this.state.pwd1, (err)=>{
            if(err) {
                console.log('1..111.....'+err);
            } else {
                alert('恭喜注册成功！请到您的邮箱中完成验证');
            }
        });
    }
}