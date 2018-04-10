import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
    Meteor.publish('UserList', function () {
        return Meteor.users.find({},{fields:{username:true}});
    });
}