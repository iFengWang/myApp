import { Meteor } from 'meteor/meteor';
// import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Email } from 'meteor/email';
import { check } from 'meteor/check';

// Meteor.users.deny({
//     insert() { return true; },
//     update() { return true; },
//     remove() { return true; },
//   });

if (Meteor.isServer) {
    Meteor.publish('UserProFile', function () {
        return Meteor.users.find({},{filter:{profile:1}});
    });
}

Meteor.methods({
    'user.create'(email, pwd, callback) {

        // const dict = {
        //     username:'xiaofeng',
        //     email:'gf_w@qq.com',
        //     password:'vvvvvvvvv',
        //     profile:{
        //         icon:'http://www.baidu.com/icon.png',
        //         mobile:'15201628002',
        //         info:'个人信息描述',
        //     }
        // }

        const user = {
            password:pwd,
            email:email
        }

        // Accounts.validateNewUser((user) => {
        //     new SimpleSchema({
        //       _id: { type: String },
        //       emails: { type: Array, optional: true},
        //       'emails.$': { type: Object },
        //       'emails.$.address': { type: String },
        //       'emails.$.verified': { type: Boolean },
        //       createdAt: { type: Date },
        //       services: { type: Object, blackbox: true }
        //     }).validate(user);
        //     return true;
        // });

        Accounts.createUser(user, callback);

        // const uId = Accounts.createUser(user, callback);
        // if(Meteor.isServer) Accounts.sendVerificationEmail(uId,'wgf8866@163.com',{title:'test....'});

        // const dict = {
        //     mobile:mobile,
        //     password:pwd,
        //     createAt:new Date()
        // }
        // Meteor.users.insert(dict);
    },
    'mail.action'(type) {
        switch(type) {
            case 'add':
                if(Meteor.isServer) Accounts.addEmail(this.userId,'wgf8866@163.com',false);
                break;
            case 'remove':
                if(Meteor.isServer) Accounts.removeEmail(this.userId,'wgf8866@163.com');
                break;
            case 'sendVerify':
                if(Meteor.isServer) Accounts.sendVerificationEmail(this.userId,'gf_w@qq.com',{title:'test....'});
                break;
            case 'sendMail':
                // check([to, from, subject, text], [String]);
                this.unblock();
                Email.send({ 
                    to:'wgf8866@163.com', 
                    from:'gf_w@qq.com', 
                    subject:'主题在此', 
                    text:'正文在此。。。。。' 
                });
                break;
        }
    }
});