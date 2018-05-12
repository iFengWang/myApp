import React,{ Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';
import { withTracker } from 'meteor/react-meteor-data';
import { Photos } from '../api/photos.js';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Header from './Header.js';
import Footer from './Footer.js';
import CameraButton from './buttons/CameraButton.js';

let pageCount = 20;

const styles = {
    content:{
        width:'100%',
        height:(Meteor.isCordova?window.screen.height:window.innerHeight)-(Meteor.isCordova?64:44)-50,
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'flexStart', 
        alignItems:'center', 
        overflow:'auto'
    },
    gridList: {
      overflowY: 'auto',
      display:'flex',
      justifyContent:'flexStart',
      width: '100%',
      marginTop:2
    },
    gridTile: {
        border:'dotted 1px #FF0000',
        overflow:'hidden',
        borderRadius:5
    }
  };

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dialogParam:null,
            isLoading:false
        };
    }
    render() {
        return (
            <div>
                <Header title={this.props.title} rightButton={<CameraButton />} />
                <div style={styles.content}>
                    <GridList  
                    style={styles.gridList}
                    cols={2}>
                    {/* <Subheader>December</Subheader> */}
                    {this.props.photoList.map((photo,index,ary) => (
                        <GridTile
                        key={photo._id}
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
                        <GridTile
                        padding={1}
                        title={this.state.isLoading?null:'加载更多'}
                        titleStyle={{textAlign:'center',marginTop:5}}
                        // subtitle={<span>by <b>{photo.author}</b></span>}
                        // actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        cols={2}
                        style={{
                            height:40,
                            borderRadius:5,
                            border:'dotted 1px #FF0000'}}
                        onClick={() => {
                            pageCount += 20;
                            const subscribe = Meteor.subscribe('Photos',pageCount);
                            if(subscribe.ready) {
                                this.setState({isLoading:false});
                            } else {
                                this.setState({isLoading:true});
                            }
                        }}
                        >
                            {this.state.isLoading?
                                <RefreshIndicator
                                size={40}
                                left={window.innerWidth/2-20}
                                top={0}
                                percentage={100}
                                // color="red"
                                loadingColor="red"
                                status="loading"
                                style={{display: 'inline-block',position: 'relative',alignContent:'center'}}
                                />:null
                            }
                        </GridTile>
                    </GridList>
                    {this.state.dialogParam?this.renderDialog():null}
                </div>
                <Footer selectedIndex={0} />
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
    Meteor.subscribe('Photos',pageCount);
    return {
      photoList: Photos.find({},{sort:{createAt:-1}}).fetch(),
    };
  })(Home);