import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default class NotFound extends Component {
    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'#00FF00'}}>
                哥们走错路了！^_^ <br />
                <RaisedButton label='返回' onClick={this.onClickButton} />
            </div>
        );
    }
    onClickButton = () => {FlowRouter.go('/home')}
}