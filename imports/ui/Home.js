import React,{ Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { withTracker } from 'meteor/react-meteor-data';
import { Photos } from '../api/photos';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

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
        this.state = {dialogParam:null};
    }
    render() {
        return (
            <div>
                <GridList  
                style={styles.gridList}
                cols={2}>
                {/* <Subheader>December</Subheader> */}
                {this.props.photoList.map((photo,index,ary) => (
                    <GridTile
                    key={photo.img}
                    padding={1}
                    title={photo.title}
                    subtitle={<span>by <b>{photo.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    cols={(ary.length%2==1 && index==ary.length-1) ? 2 : 1}
                    style={styles.gridTile}
                    onClick={() => this.setState({dialogParam:photo._id})}
                    >
                    <img src={photo.img} />
                    </GridTile>
                ))}
                </GridList>
                {this.state.dialogParam?this.renderDialog():null}
            </div>
        );
    }
    renderDialog() {
        const actions = [
            <RaisedButton
              label="删除"
              primary={true}
              style={{margin:5}}
              onClick={()=>{
                    Meteor.call('photos.delete',this.state.dialogParam);
                    this.setState({dialogParam:null});
                }}
            />,
            <RaisedButton
              label="取消"
              secondary={true}
              disabled={false}
              style={{margin:5}}
              disabledBackgroundColor={'#666'}
              onClick={()=>this.setState({dialogParam:null})}
            />,
          ];
        return (
            <Dialog 
            title="温馨提示" 
            actions={actions} 
            modal={true} 
            contentStyle={{borderRadius:5,overflow:'hidden',boxShadow:'0px 3px 3px #666'}}
            autoScrollBodyContent={false}
            open={true}>
                您确认要删除此照片吗？
            </Dialog>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('Photos');
    return {
      photoList: Photos.find({},{sort:{createAt:-1}}).fetch(),
    };
  })(Home);