import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
    Meteor.publish('AllTasks', function() {
        return Tasks.find({});
    });
}

Meteor.methods({
    'tasks.insert'(text) {
        Tasks.insert({text:text, createAt:new Date()});
    }
});