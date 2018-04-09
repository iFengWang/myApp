import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default class Im extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex:0}
    }
    render() {
        return (
            <div>
                <AppBar 
                title='Im' 
                titleStyle={{margin:0,textAlign:'center'}}
                showMenuIconButton={false}
                zDepth={2}
                />
                <div  style={{height:550}}>
                    <RaisedButton label='点我' onClick={this.navToHome} />
                </div>
                <BottomNavigation selectedIndex={this.selectedIndex}>
                    <BottomNavigationItem
                        label="Recents"
                        icon={recentsIcon}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Favorites"
                        icon={favoritesIcon}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Nearby"
                        icon={nearbyIcon}
                        onClick={() => this.select(2)}
                    />
                </BottomNavigation>
            </div>
        );
    }
    select = (index) => this.setState({selectedIndex: index});
    navToHome = (event) => FlowRouter.go('/home');
}