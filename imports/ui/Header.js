import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const iconArray = [
    'images/avatar1.png', 
    'images/avatar2.png', 
    'images/avatar3.png', 
    'images/avatar4.png',
    'images/avatar5.png',
    'images/avatar6.png',
    'images/avatar7.png',
    'images/avatar8.png',
    'images/avatar9.png',
    'images/avatar10.png',
    'images/avatar11.png'];

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupDialog:false,
            groupIcon:null,
            groupName:null,
            openDrawer:false
        };
    }
    render() {
        let userName = Meteor.userId() && Meteor.user() && Meteor.user().profile && Meteor.user().profile.nickName ? Meteor.user().profile.nickName : '';
        let userIcon = Meteor.userId() && Meteor.user() && Meteor.user().profile && Meteor.user().profile.icon ? Meteor.user().profile.icon : '/images/avatar13.png';
        return (
            <div>
                <Drawer
                docked={false}
                width={200}
                open={this.state.openDrawer}
                onRequestChange={(openDrawer) => this.setState({openDrawer})} >
                    <div>
                        <ListItem style={{borderBottom:'dotted 1px red',height:120,textAlign:'center',paddingTop:10}}>
                            <Avatar src={userIcon} size={50}/><br />
                            <span style={{lineHeight:2}}>{userName}</span>
                        </ListItem>
                        
                        <ListItem 
                        leftIcon={<FontIcon className="material-icons md-36" color={'yellow'}>send</FontIcon>}
                        primaryText={'发送邮件'}
                        // onClick={() => {Meteor.logout((err)=>{ if(!err) FlowRouter.go('/account/login')})}}
                        style={{borderBottom:'dotted 1px red'}}>
                        </ListItem>

                        <ListItem 
                        leftIcon={<FontIcon className="material-icons md-36" color={'yellow'}>reply_all</FontIcon>}
                        primaryText={'我要分享'}
                        // onClick={() => {Meteor.logout((err)=>{ if(!err) FlowRouter.go('/account/login')})}}
                        style={{borderBottom:'dotted 1px red'}}>
                        </ListItem>

                        <ListItem 
                        leftIcon={<FontIcon className="material-icons md-36" color={'yellow'}>wifi_tethering</FontIcon>}
                        primaryText={'WIFI互传'}
                        // onClick={() => {Meteor.logout((err)=>{ if(!err) FlowRouter.go('/account/login')})}}
                        style={{borderBottom:'dotted 1px red'}}>
                        </ListItem>

                        <ListItem 
                        leftIcon={<FontIcon className="material-icons md-36" color={'yellow'}>exit_to_app</FontIcon>}
                        primaryText={'退出帐号'}
                        onClick={() => {Meteor.logout((err)=>{ if(!err) FlowRouter.go('/account/login')})}}
                        style={{borderBottom:'dotted 1px red'}}>
                        </ListItem>
                    </div>
                    
                </Drawer>
                <AppBar 
                title={this.props.title} 
                titleStyle={{textAlign:'center'}}
                style={{paddingTop:Meteor.isCordova?8:0,height:Meteor.isCordova?64:44}}
                showMenuIconButton={true}
                iconElementLeft={this.props.leftButton}
                iconElementRight={this.props.rightButton || this.MenuButton()}
                onLeftIconButtonClick={()=> this.setState({openDrawer:true})}
                zDepth={2} />
                {this.state.groupDialog?this.renderDialog():null}
            </div>
        );
    }
    MenuButton() {
        return (
            <IconMenu 
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} 
                anchorOrigin={{horizontal: 'right', vertical: 'top'}} 
                targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                <MenuItem primaryText="创建群" onClick={(event)=>{
                    this.setState({groupDialog:true})
                }}/>
                <MenuItem primaryText="加朋友" onClick={(event)=>{
                    //
                }}/>
                <MenuItem primaryText="扫一扫" onClick={(event)=>{
                    //
                }}/>
            </IconMenu>
        );
    }
    renderDialog() {
        const actions = [
            <RaisedButton
              label="创建"
              primary={true}
              style={{margin:5}}
              onClick={()=>{
                    Meteor.call('chatGroup.insert', this.state.groupIcon, this.state.groupName);
                    this.setState({groupDialog:false});
                }}
            />,
            <RaisedButton
              label="取消"
              secondary={true}
              disabled={false}
              style={{margin:5}}
              disabledBackgroundColor={'#666'}
              onClick={()=>this.setState({groupDialog:false})}
            />,
          ];
        return (
            <Dialog 
            title="创建群组" 
            actions={actions} 
            modal={true} 
            contentStyle={{borderRadius:5,overflow:'hidden',boxShadow:'0px 3px 3px #666'}}
            autoScrollBodyContent={false}
            open={true}>
                <AutoComplete
                fullWidth={true}
                style={{width:'100%'}}
                floatingLabelText="选择一个ICON"
                filter={AutoComplete.noFilter}
                openOnFocus={true}
                value={this.state.groupIcon}
                dataSource={iconArray}
                onUpdateInput={(searchText,dataSource,params)=>this.setState({groupIcon:searchText})}
                />
                <TextField 
                fullWidth={true}
                style={{width:'100%'}}
                hintText="群名称字数在2~5字"
                floatingLabelText="请输入您的群名称" 
                value={this.state.groupName}
                onChange={(event,newValue)=>this.setState({groupName:newValue})}
                />
            </Dialog>
        );
    }
}