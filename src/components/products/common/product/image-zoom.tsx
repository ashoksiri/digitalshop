import React, { Component } from 'react';

export default class ImageZoom extends Component {
    render() {
        //@ts-ignore
        const {image} = this.props;

        return (
            <img src={`${image}`}  className="img-fluid image_zoom_cls-0" />
        );
    }
}