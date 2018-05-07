import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ChatGroup = new Mongo.Collection('chatGroup');
if (Meteor.isServer) {
    Meteor.publish('ChatGroup',function(){
        return ChatGroup.find({});
    });
}

Meteor.methods({
    'chatGroup.insert'(groupIcon,groupName) {
        // if(!this.userId) return;
        ChatGroup.insert({
            groupIcon:groupIcon, 
            groupName:groupName, 
            // adminId:this.userId,
            createAt:new Date()
        });
    }
});