import Container from '../imports/ui/Container.js';
import Home from '../imports/ui/Home.js';
import Im from '../imports/ui/Im.js';

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
        ReactLayout.render(Container, {contents:<Home />});
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
        ReactLayout.render(Im);
      },
      triggersEnter:[]
  });