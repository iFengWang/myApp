import React,{Component} from 'react';
import IconButton from 'material-ui/IconButton';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import ImageCameraAlt from 'material-ui/svg-icons/image/camera-alt';
import ImageCameraFront from 'material-ui/svg-icons/image/camera-front';

export default class CameraButton extends Component {
    render() {
        return (
            <IconButton onClick={(event)=>{
                MeteorCamera.getPicture({width:window.screen.width, height:window.screen.height,quality:100}, function(error,data){
                    if(!error) {
                        Meteor.call('photos.insert',{
                            title:'haha',
                            img:data,
                            author:'xiaofeng',
                            createAt:new Date()
                        });
                    } else {
                        console.log('error......'+error);
                    }
                });
            }}>
            <ImageCameraAlt color="white" />
            </IconButton>
        );
    }
}