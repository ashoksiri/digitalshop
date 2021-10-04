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

class ProductStyleTen extends Component<IProps, IState> {

    constructor(props: any){
        super(props)

        this.state = {
            image: ''
        }
    }

    onClickHandle(img: any) {
        this.setState({ image : img} );
    }


    render() {

        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;

        const RatingStars = []
        for(let i = 0; i < product.rating; i++) {
            RatingStars.push(<i className="fa fa-star" key={i}></i>)
        }

        return (

            <div className="product-box">
                <div className="img-wrapper">
                    <div className="lable-block">
                        {(product.new == true)? <span className="lable3">new</span> : ''}
                        {(product.sale == true)? <span className="lable4">on sale</span> : ''}
                    </div>
                    <div className="front">
                        <Link to={`/left-sidebar/product/${product.id}`} ><img
                            src={product.variants?
                                this.state.image?this.state.image:product.variants[0].images
                                :product.pictures[0]}
                            className="img-fluid"
                            alt="" /></Link>
                    </div>
                    <div className="cart-info cart-wrap">
                        <button title="Add to cart" onClick={() => onAddToCartClicked(product, 1)}>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                        <a href="#" title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="#" data-toggle="modal"
                           data-target="#quick-view"
                           title="Quick View">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                        <Link to={`/compare`} title="Compare" onClick={onAddToCompareClicked}>
                            <i className="fa fa-refresh" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="product-detail">
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

export default ProductStyleTen;