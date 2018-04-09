import React from 'react';
import Container from '../imports/ui/Container.js';
import Home from '../imports/ui/Home.js';
import Im from '../imports/ui/Im.js';
import Oa from '../imports/ui/Oa.js';
import Me from '../imports/ui/Me.js';
import NotFound from '../imports/ui/NotFound.js';

FlowRouter.route('/',{
    action:function(param,queryParam) {
        FlowRouter.redirect('/home');
    }
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
    }]
  });

  oa.route('/',{
      action:function(param,queryParam) {
        ReactLayout.render(Container, {title:'OA',contents:<Oa />});
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