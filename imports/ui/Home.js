import React,{ Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { withTracker } from 'meteor/react-meteor-data';
import { Photos } from '../api/photos';

const styles = {
    gridList: {
      overflowY: 'auto',
      display:'flex',
      justifyContent:'flexStart',
      width: window.innerWidth,
    //   backgroundColor:'#FF0000',
      padding:5
    },
    gridTile: {
        border:'dotted 1px #FF0000',
        overflow:'hidden',
        borderRadius:5,
    }
  };

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <GridList  
            style={styles.gridList}
            cols={2}>
            {/* <Subheader>December</Subheader> */}
            {this.props.photoList.map((photo,index) => (
                <GridTile
                key={photo.img}
                padding={1}
                title={photo.title}
                subtitle={<span>by <b>{photo.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                // cols={index%1==0 ? 2 : 1}
                style={styles.gridTile}
                onClick={()=>Meteor.call('photos.delete',photo._id)}
                >
                <img src={photo.img} />
                </GridTile>
            ))}
            </GridList>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('Photos');
    return {
      photoList: Photos.find({},{sort:{createAt:-1}}).fetch(),
    };
  })(Home);