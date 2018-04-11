import React,{ Component } from 'react';
import TaskList from './TaskList.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { yellow500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

export default class Oa extends Component {
    constructor(props) {
        super(props);
        this.state = {slideIndex:0};
    }
    render() {
        return (
            <div>
                <div>
                    <RaisedButton label="地图" secondary={true} onClick={() => FlowRouter.go('/oa/map')}/>
                </div>

                <div>
                    <TaskList />
                </div>

                <div>
                    <Tabs onChange={(value)=> this.setState({slideIndex:value})} value={this.state.slideIndex} inkBarStyle={{backgroundColor:yellow500}} >
                        <Tab label="今天" value={0} />
                        <Tab label="工作圈" value={1} />
                        <Tab label="仪表盘" value={2} />
                    </Tabs>
                    <SwipeableViews index={this.state.slideIndex} onChangeIndex={(value)=> this.setState({slideIndex:value})} style={{border:'solid 1px #F00'}}>
                        <div>
                            <h2>Tabs with slide effect</h2>
                            Swipe to see the next slide.<br />
                        </div>
                        <div>
                            slide n°2
                        </div>
                        <div>
                            slide n°3
                        </div>
                    </SwipeableViews>
                </div>
            </div>
        );
    }
}