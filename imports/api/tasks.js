import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
// Tasks.deny({
//     insert() { return true; },
//     update() { return true; },
//     remove() { return true; },
// });


if (Meteor.isServer) {
    Meteor.publish('AllTasks', function() {
        return Tasks.find({});  //,{limit: 5}
    });
}

Meteor.methods({
    'tasks.insert'(text) {
        Tasks.insert({text:text, createAt:new Date()});
        console.log('server ..... client .....都执行了');
    }
});