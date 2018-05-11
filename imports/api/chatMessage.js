import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ChatMessage = new Mongo.Collection('chatMessage');
if (Meteor.isServer) {
    Meteor.publish('ChatMessage',function(groupId){
        return ChatMessage.find({groupId:groupId},{sort:{createAt:-1}});
    });
}

Meteor.methods({
    'ChatMessage.insert'(sendId,reciveId,message,msgType,groupId) {
        ChatMessage.insert({
            sendId:sendId,
            reciveId:reciveId,
            message:message,
            msgType:msgType,
            groupId:groupId,
            createAt:new Date()
        });
    }
});