import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ChatMessage = new Mongo.Collection('chatMessage');
if (Meteor.isServer) {
    Meteor.publish('ChatMessage',function(groupId){
        return ChatMessage.find({groupId:groupId},{sort:{createAt:-1}});
    });
}

Meteor.methods({
    'ChatMessage.insert'(sendId,sendName,sendIcon,reciveId,reciveIcon,reciveName,message,groupId) {
        ChatMessage.insert({
            sendId:sendId,
            sendName:sendName,
            sendIcon:sendIcon,
            reciveId:reciveId,
            reciveIcon:reciveIcon,
            reciveName:reciveName,
            message:message,
            groupId:groupId,
            createAt:new Date()
        });
    }
});