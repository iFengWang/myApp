import React,{ Component } from 'react';
import { Map } from 'react-amap';

export default class BaiduMap extends Component {
    render() {
        return (
            <Map />
        );
    }
    onChange(event) {
        this.refs.location.search(event.target.value);
    }
    onSelect(point) {
    // point.lng
    // point.lat
    }
}