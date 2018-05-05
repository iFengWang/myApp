import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Chat = new Mongo.Collection('chatList');
if (Meteor.isServer) {
    Meteor.publish('Chat',function(){
        return Chat.find({});
    });
}

Meteor.methods({
    'Chat.insert'(sendName,reciveName,timestamp,message,groupId) {

    }
});