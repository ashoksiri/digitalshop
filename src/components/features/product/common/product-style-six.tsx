import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';

interface IState {
    quantity?: any
    open?: any
    stock?: string
    image?: string
}

interface IProps {
    product?: any
    symbol?: any
    onAddToCartClicked?: any
    onAddToWishlistClicked?: any
    onAddToCompareClicked?: any
    addToCart?: any
    addToWishlist?: any
    addToCompare?: any
    incrementQty?: any
    decrementQty?: any
    removeFromCart?: any
}
class ProductStyleSix extends Component<IProps, IState> {

    render() {
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;

        const RatingStars = []
        for(let i = 0; i < product.rating; i++) {
            RatingStars.push(<i className="fa fa-star" key={i}></i>)
        }

        return (

            <div className="product-box product-wrap">
                <div className="img-wrapper">
                    <div className="lable-block">
                        {(product.new == true)? <span className="lable3">new</span> : ''}
                        {(product.sale == true)? <span className="lable4">on sale</span> : ''}
                    </div>
                    <div className="front">
                        <Link to={`/left-sidebar/product/${product.id}`} ><img
                            src={product.variants?
                                product.variants[0].images
                                :product.pictures[0]}
                            className="img-fluid"
                            alt="" /></Link>
                    </div>
                    <div className="cart-info cart-wrap">
                        <a href="#" title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <button title="Add to cart" onClick={() => onAddToCartClicked(product, 1)}>
                            Add To Cart
                        </button>
                        <Link to={`/compare`} title="Compare" onClick={onAddToCompareClicked}>
                            <i className="fa fa-refresh" aria-hidden="true"></i></Link>
                        <a className="mobile-quick-view" href="#" data-toggle="modal" data-target="#quick-view"
                           title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></a>
                    </div>
                    <div className="quick-view-part">
                        <a href="#" data-toggle="modal"
                           data-target="#quick-view"
                           title="Quick View"
                        ><i className="fa fa-search" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="product-detail  text-center">
                    <div>
                        <div className="rating">
                            {RatingStars}
                        </div>
                        <Link to={`/left-sidebar/product/${product.id}`}>
                            <h6>{product.name}</h6>
                        </Link>
                        <h4>{symbol}{product.price-(product.price*product.discount/100)}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductStyleSix;