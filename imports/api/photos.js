import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Photos = new Mongo.Collection('photos');
if(Meteor.isServer) {
    Meteor.publish('Photos',function(num){
        return Photos.find({},{limit:num,sort:{createAt:-1}});
    });
}

Meteor.methods({
    'photos.insert'(option) {
        Photos.insert(option);
    },
    'photos.delete'(id) {
        Photos.remove({_id:id});
    }
});