import { Accounts } from 'meteor/accounts-base';
// Accounts.ui.config({
//   passwordSignupFields: 'EMAIL_ONLY',
// });

Accounts.onEmailVerificationLink((token,done) => {
    console.log('点击了邮件里的验证Link..............');
    Accounts.verifyEmail(token, (err)=>{
      if(err) {
        console.log('email验证错误........'+err);
      } else {
        console.log('email验证成功！！！！！！');
        done();
      }
    });
});