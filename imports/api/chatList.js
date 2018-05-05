import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const ChatGroup = new Mongo.Collection('chatGroup');
if (Meteor.isServer) {
    Meteor.publish('ChatGroup',function(){
        return ChatGroup.find({});
    });
}

Meteor.methods({
    'chatGroup.insert'(chatName) {

    }
});