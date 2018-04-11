import React,{ Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: '100%',
      height: '100%',
      overflowY: 'auto',
    },
  };
  
  const tilesData = [
    {
      img: 'images/1.jpg',
      title: 'Breakfast',
      author: 'jill111',
    },
    {
      img: 'images/2.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
    },
    {
      img: 'images/3.jpg',
      title: 'Camera',
      author: 'Danson67',
    },
    {
      img: 'images/4.jpg',
      title: 'Morning',
      author: 'fancycrave1',
    },
    {
      img: 'images/5.jpg',
      title: 'Hats',
      author: 'Hans',
    },
    {
      img: 'images/6.jpg',
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      img: 'images/7.jpg',
      title: 'Vegetables',
      author: 'jill111',
    },
    {
      img: 'images/8.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },

    {
        img: 'images/9.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'images/10.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'images/11.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'images/12.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'images/13.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'images/14.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'images/15.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'images/16.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
  ];

export default class Home extends Component {
    render() {
        return (
            <GridList cellHeight={180} style={styles.gridList}>
            {/* <Subheader>December</Subheader> */}
            {tilesData.map((tile) => (
                <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span>by <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                <img src={tile.img} />
                </GridTile>
            ))}
            </GridList>
        );
    }
}