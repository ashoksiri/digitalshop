import React, {Component} from 'react';
import Slider from 'react-slick';
import '../common/index.scss';
import {connect} from "react-redux";


// import custom Components
import RelatedProduct from "../common/related-product";
import Breadcrumb from "../layouts/common/breadcrumb";
import DetailsWithPrice from "./common/product/details-price";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist } from '../../actions'
import ImageZoom from './common/product/image-zoom'
import SmallImages from './common/product/small-image'




class NoSideBar extends Component {

    constructor() {
        //@ts-ignore
        super();
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        //@ts-ignore*
        this.setState({ nav1: this.slider1, nav2: this.slider2});

    }

    render(){
        //@ts-ignore*
        const {symbol, item, addToCart, addToCartUnsafe, addToWishlist} = this.props
        const products = {
            fade: true
        };

        const productsnav = {
            slidesToShow: 3,
            slidesToScroll:1,
            swipeToSlide:true,
            draggable:true,
            focusOnSelect: true
        };


        return (
            <div>

                <Breadcrumb title={' Product / '+item.name} />

                {/*Section Start*/}
                {(item)?
                <section >
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 product-thumbnail">
                                    {/*//@ts-ignore*/}
                                    <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="product-slick">
                                        {/*//@ts-ignore*/}
                                        {item.variants.map((vari, index) =>
                                            <div key={index}>
                                                {/*//@ts-ignore*/}
                                                <ImageZoom image={vari.images} className="img-fluid image_zoom_cls-0" />
                                            </div>
                                        )}
                                    </Slider>
                                    {/*//@ts-ignore*/}
                                    <SmallImages item={item} settings={productsnav} navOne={this.state.nav1} />
                                </div>
                                {/*//@ts-ignore*/}
                                <DetailsWithPrice symbol={symbol} item={item} navOne={this.state.nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe} addToWishlistClicked={addToWishlist} />
                            </div>
                        </div>
                    </div>
                </section> : ''}
                {/*Section End*/}

                <section className="tab-product m-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                {/*//@ts-ignore*/}
                                <DetailsTopTabs item={item} />
                            </div>
                        </div>
                    </div>
                </section>

                <RelatedProduct />
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    const productId = ownProps.match.params.id;
    return {
        item: state.data.products.find((el: any) => el.id == productId),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, {addToCart, addToCartUnsafe, addToWishlist}) (NoSideBar);