import React from 'react';
import Container from '../../ui/Container.js';
import Home from '../../ui/Home.js';
import Im from '../../ui/Im.js';
import Oa from '../../ui/Oa.js';
import Me from '../../ui/Me.js';
import NotFound from '../../ui/NotFound.js';
import AliMap from '../../ui/AliMap.js';

import RegisterUI from '../../ui/account/register.js';
// import AccountUI from '../../ui/AccountUI.js';

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
    }]
  });

// account.route('/login',{
//     action:function(param,queryParam) {
//       ReactLayout.render(Container, {title:'登录',contents:<AccountUI />});
//     },
//     triggersEnter:[]
// });

account.route('/register',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {title:'注册',contents:<RegisterUI />});
      },
      triggersEnter:[]
  });

// home page **************************************
const home = FlowRouter.group({
    prefix: '/home',
    name: 'home',
    triggersEnter: [function(context, redirect) {
        console.log('进入首页...组....');
    }]
  });

  home.route('/',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {title:'Home',contents:<Home />});
      },
      triggersEnter:[]
  });

  // im page **************************************
const im = FlowRouter.group({
    prefix: '/im',
    name: 'im',
    triggersEnter: [function(context, redirect) {
        console.log('进入IM...组....');
    }]
  });

  im.route('/',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {title:'Im',contents:<Im />});
      },
      triggersEnter:[]
  });

  // im page **************************************
const oa = FlowRouter.group({
    prefix: '/oa',
    name: 'oa',
    triggersEnter: [function(context, redirect) {
        console.log('进入OA...组....');
        // Meteor.subscribe('AllTasks');
    }]
  });

  oa.route('/',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {title:'OA',contents:<Oa />});
      },
      triggersEnter:[]
  });

  oa.route('/map',{
    action:function(param,queryParam) {
      ReactLayout.render(Container, {title:'Map',contents:<AliMap />});
    },
    triggersEnter:[]
  });

  // me page **************************************
const me = FlowRouter.group({
    prefix: '/me',
    name: 'me',
    triggersEnter: [function(context, redirect) {
        console.log('进入ME...组....');
    }]
  });

  me.route('/',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {title:'Me',contents:<Me />});
      },
      triggersEnter:[]
  });

  // notFound page **************************************
  FlowRouter.notFound = {
    subscriptions: function() {
        //
    },
    action: function() {
        ReactLayout.render(Container, {title:'查无此页', contents:<NotFound />});
    }
};