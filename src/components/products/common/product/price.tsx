import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Slider from 'react-slick';



class Price extends Component {

    constructor (props: any) {
        super (props)
        this.state = {
            quantity:1,
            stock: 'InStock',
            nav3: null
        }
    }

    componentDidMount() {
        //@ts-ignore
        this.setState({ nav3: this.slider3 });
    }

    minusQty = () => {
        //@ts-ignore
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            //@ts-ignore
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        //@ts-ignore
        if(this.props.item.stock >= this.state.quantity) {
            //@ts-ignore
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e: any) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render (){
        //@ts-ignore
        const {symbol, item, addToCartClicked, BuynowClicked} = this.props

        const colorsnav = {
            slidesToShow: 6,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div className="col-lg-4">
                <div className="product-right product-form-box">
                    <h4>
                        <del>{symbol}{item.price}</del>
                        <span>{item.discount}% off</span>
                    </h4>
                    <h3>{symbol}{(item.price*item.discount/100)} </h3>
                    <ul className="color-variant">
                        {/*//@ts-ignore*/}
                        <Slider {...colorsnav} asNavFor={this.props.navOne} ref={slider => (this.slider1 = slider)} className="color-variant">
                            {/*//@ts-ignore*/}
                            {item.variants.map((vari, i) => {
                                return <li className={vari.color} key={i} title={vari.color}></li>
                            })}
                        </Slider>
                    </ul>
                    <div className="product-description border-product">
                        <h6 className="product-title">Time Reminder</h6>
                        <div className="timer">
                            <p id="demo">
                                <span>25
                                    <span className="padding-l">:</span>
                                    <span className="timer-cal">Days</span>
                                </span>
                                <span>22
                                    <span className="padding-l">:</span>
                                    <span className="timer-cal">Hrs</span>
                                </span>
                                <span>13
                                    <span className="padding-l">:</span>
                                    <span className="timer-cal">Min</span>
                                </span>
                                <span>57
                                    <span className="timer-cal">Sec</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="product-description border-product">
                        <h6 className="product-title size-text">select size
                            <span><a href="" data-toggle="modal"
                                     data-target="#sizemodal">size chart</a></span></h6>
                        {/*//@ts-ignore*/}
                        <div className="modal fade" id="sizemodal" tabIndex="-1"
                             role="dialog" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered"
                                 role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title"
                                            id="exampleModalLabel">Sheer Straight
                                            Kurta</h5>
                                        <button type="button" className="close"
                                                data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={`../assets/images/size-chart.jpg`}
                                             alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="size-box">
                            <ul>
                                {/*//@ts-ignore*/}
                                {item.size.map((size, i) => {
                                    return <li key={i}><a href="#">{size}</a></li>
                                })}
                            </ul>
                        </div>
                        {/*//@ts-ignore*/}
                        <span>{this.state.stock}</span>
                        <h6 className="product-title">quantity</h6>
                        <div className="qty-box">
                            <div className="input-group">
                                  <span className="input-group-prepend">
                                    <button type="button" className="btn quantity-left-minus" onClick={this.minusQty} data-type="minus" data-field="">
                                     <i className="fa fa-angle-left"></i>
                                    </button>
                                  </span>
                                {/*//@ts-ignore*/}
                                <input type="text" name="quantity" value={this.state.quantity} onChange={this.changeQty} className="form-control input-number" />
                                <span className="input-group-prepend">
                                <button type="button" className="btn quantity-right-plus" onClick={this.plusQty} data-type="plus" data-field="">
                                <i className="fa fa-angle-right"></i>
                                </button>
                               </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-buttons" >
                        {/*//@ts-ignore*/}
                        <a className="btn btn-solid" onClick={() => addToCartClicked(item, this.state.quantity)}>add to cart</a>
                        {/*//@ts-ignore*/}
                        <Link to={`/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity)} >buy now</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Price;