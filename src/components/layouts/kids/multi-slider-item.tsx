import React, {Component} from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom'

interface IProps {
    items?: any
    NoOfProducts?: any
    symbol?: any
}

class MultiSliderItem extends Component<IProps> {
    render (){
        //@ts-ignore
        const {items, symbol, NoOfProducts} = this.props;

        var arrays = [];
        while (items.length > 0) {
            arrays.push(items.splice(0, NoOfProducts));
        }

        return (
                <Slider className="offer-slider slide-1">
                    {arrays.map((products: any, index: any) =>
                        <div key={index}>
                            {products.map((product: any, i: any) =>
                                <div className="media" key={i}>
                                    <Link to={`/left-sidebar/product/${product.id}`}>
                                        <img className="img-fluid" src={
                                            product.variants?
                                                product.variants[0].images
                                                :product.pictures[0]
                                        } alt="" />
                                    </Link>
                                    <div className="media-body align-self-center">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <Link to={`/left-sidebar/product/${product.id}`}><h6>{product.name}</h6></Link>
                                        <h4>{symbol}{product.price-(product.price*product.discount/100)}
                                            <del><span className="money">{symbol}{product.price}</span></del></h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Slider>
        )
    }
}

export default MultiSliderItem;
