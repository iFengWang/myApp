// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
// import { Tasks } from '../../api/tasks.js';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {

  // account-ui生效
  // Accounts.config({
  //   sendVerificationEmail: true,
  //   forbidClientAccountCreation: true
  // });

  if(Meteor.isServer) {

    Accounts.onCreateUser((options, user) => {
      user.profile = {
        nickName:'阿宝',
        sex:true,      //true:男，false:女
        icon:null
      };
      console.log('用户创建成功。。。。。。。。。');
      Meteor.setTimeout(function() { Accounts.sendVerificationEmail(user._id);}, 2 * 1000);
      return user;
    });

    // const username = encodeURIComponent("guangfeng.w");
    // const password = encodeURIComponent("xiaofeng423");
    // const domain = "smtp.gmail.com";
    // const port = 587;

    const username = encodeURIComponent("gf_w");
    const password = encodeURIComponent("wpbqtzmgskoxbibh");
    const domain = "smtp.qq.com";
    const port = 587;
  
    // const username = encodeURIComponent("wgf8866");
    // const password = encodeURIComponent("xiaofeng1982423");
    // const domain = "smtp.163.com";
    // const port = 25;

    //*****************************************
    Accounts.emailTemplates.siteName = 'iFeng.com';
    Accounts.emailTemplates.from = 'gf_w@qq.com';

    // Accounts.emailTemplates.enrollAccount.subject = (user) => {
    //   return `Welcome to Awesome Town, ${user.profile.name}`;
    // };
    // Accounts.emailTemplates.enrollAccount.text = (user, url) => {
    //   return 'You have been selected to participate in building a better future!'
    //     + ' To activate your account, simply click the link below:\n\n'
    //     + url;
    // };
    // Accounts.emailTemplates.resetPassword.from = () => {
    //   // Overrides the value set in `Accounts.emailTemplates.from` when resetting
    //   // passwords.
    //   return 'AwesomeSite Password Reset <no-reply@example.com>';
    // };
    // Accounts.emailTemplates.verifyEmail = {
    //   subject() {
    //       return "Activate your account now!";
    //   },
    //   text(user, url) {
    //       return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
    //   }
    // };
    //*****************************************

    process.env.MAIL_URL = "smtp://" + username + ":" + password + "@" + domain + ":" + port;
  }
});
