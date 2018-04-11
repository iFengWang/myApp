import React,{ Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// import AccountUI from './AccountUI.js';

export default class Me extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="images/avatar3.png"
                />
                <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
                    <img src="images/banner.gif" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="button1" />
                    <FlatButton label="button2" />
                </CardActions>
            </Card>
        );
    }
}