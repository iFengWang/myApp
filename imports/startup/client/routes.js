import React from 'react';
import Container from '../../ui/Container.js';
import Home from '../../ui/Home.js';
import Oa from '../../ui/Oa.js';
import Me from '../../ui/Me.js';
import NotFound from '../../ui/NotFound.js';
import AliMap from '../../ui/AliMap.js';
import ChatList from '../../ui/im/ChatList.js';
import Chat from '../../ui/im/Chat.js';

import RegisterUI from '../../ui/account/register.js';
import LoginUI from '../../ui/account/login.js';

FlowRouter.route('/',{
    action:function(param,queryParam) {
        console.log('进入根....');
        FlowRouter.redirect('/home');
    }
});

// account page **************************************
const account = FlowRouter.group({
    prefix: '/account',
    name: 'account',
    triggersEnter: [function(context, redirect) {
        console.log('进入帐户...组....');
        if(Meteor.userId()) {
            FlowRouter.redirect('/home');
        }
    }]
  });

account.route('/login',{
    action:function(param,queryParam) {
      ReactLayout.render(Container, {contents:LoginUI,param:{title:'登录'}});
    },
    triggersEnter:[]
});

account.route('/register',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {contents:RegisterUI,param:{title:'注册'}});
      },
      triggersEnter:[]
  });

// home page **************************************
const home = FlowRouter.group({
    prefix: '/home',
    name: 'home',
    triggersEnter: [function(context, redirect) {
        console.log('进入首页...组....',Meteor.userId());
        if(!Meteor.userId()) {
            FlowRouter.redirect('/account/login');
        }
    }]
  });

  home.route('/',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {contents:Home,param:{title:'首页'}});
      },
      triggersEnter:[]
  });

  // im page **************************************
    const im = FlowRouter.group({
        prefix: '/im',
        name: 'im',
        triggersEnter: [function(context, redirect) {
            console.log('进入IM...组....');
            if(!Meteor.userId()) {
                FlowRouter.redirect('/account/login');
            }
        }]
    });

    im.route('/',{
        action:function(param,queryParam) {
            ReactLayout.render(Container, {contents:ChatList,param:{title:'聊天'}});
        },
        triggersEnter:[]
    });
    im.route('/chat/:groupId',{
        action:function(param,queryParam) {
            ReactLayout.render(Container, {contents:Chat,param:{groupId:param.groupId,title:queryParam.title}});
        },
        triggersEnter:[]
    });

  // oa page **************************************
const oa = FlowRouter.group({
    prefix: '/oa',
    name: 'oa',
    triggersEnter: [function(context, redirect) {
        console.log('进入OA...组....');
        // Meteor.subscribe('AllTasks');
        if(!Meteor.userId()) {
            FlowRouter.redirect('/account/login');
        }
    }]
  });

  oa.route('/',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {contents:Oa,param:{title:'办公'}});
      },
      triggersEnter:[]
  });

  oa.route('/map',{
    action:function(param,queryParam) {
      ReactLayout.render(Container, {contents:AliMap,param:{title:'地图'}});
    },
    triggersEnter:[]
  });

  // me page **************************************
const me = FlowRouter.group({
    prefix: '/me',
    name: 'me',
    triggersEnter: [function(context, redirect) {
        console.log('进入ME...组....');
        if(!Meteor.userId()) {
            FlowRouter.redirect('/account/login');
        }
    }]
  });

  me.route('/',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {contents:Me,param:{title:'我的'}});
      },
      triggersEnter:[]
  });

  // notFound page **************************************
  FlowRouter.notFound = {
    subscriptions: function() {
        //
    },
    action: function() {
        ReactLayout.render(Container, {contents:NotFound,param:{title:'查无此页'}});
    }
};