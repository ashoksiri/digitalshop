import React, {Component} from 'react';
import Slider from 'react-slick';

class SmallImages extends Component {
    constructor (props: any) {
        super(props);
        this.state = {
            nav2: null
        }
    }
    componentDidMount() {
        this.setState({
            //@ts-ignore
            nav2: this.slider2
        });
    }

    render() {
        //@ts-ignore
        const { item, settings } = this.props;

        return (
            <div className="row">
                <div className="col-12 p-0">
                    {/*// @ts-ignore */}
                    <Slider {...(settings)} asNavFor={this.props.navOne} ref={slider => (this.slider2 = slider)} className="slider-nav">
                        {/*// @ts-ignore */}
                        {item.variants? item.variants.map((vari, index) =>
                            <div key={index}>
                                <img src={`${vari.images}`} key={index} alt=""  className="img-fluid" />
                            </div>
                        ):item.pictures.map((vari: any, index: any) =>
                                <div key={index}>
                                    <img src={`${vari}`} key={index} alt=""  className="img-fluid" />
                                </div>
                            )}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default SmallImages;