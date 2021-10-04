import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link, Redirect } from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import SimpleReactValidator from 'simple-react-validator';

import Breadcrumb from "../layouts/common/breadcrumb";
import {removeFromWishlist} from '../../actions'
import {getCartTotal} from "../../services";

class checkOut extends Component {
//@ts-ignore
    constructor (props) {
        super (props)

        this.state = {
            payment:'stripe',
            first_name:'',
            last_name:'',
            phone:'',
            email:'',
            country:'',
            address:'',
            city:'',
            state:'',
            pincode:'',
            create_account: ''
        }
        //@ts-ignore
        this.validator = new SimpleReactValidator();
    }
//@ts-ignore
    setStateFromInput = (event) => {
        const obj = {};
        //@ts-ignore
        obj[event.target.name] = event.target.value;
        this.setState(obj);

      }
//@ts-ignore
      setStateFromCheckbox = (event) => {
          const obj = {};
          //@ts-ignore
          obj[event.target.name] = event.target.checked;
          this.setState(obj);
            //@ts-ignore
          if(!this.validator.fieldValid(event.target.name))
          {
              //@ts-ignore
              this.validator.showMessages();
          }
        }
    //@ts-ignore
    checkhandle(value) {
        this.setState({
            payment: value
        })
    }

    StripeClick = () => {
        //@ts-ignore
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');

            // @ts-ignore
            const handler = (window).StripeCheckout.configure({
                key: 'pk_test_glxk17KhP7poKIawsaSgKtsL',
                locale: 'auto',
                token: (token: any) => {
                    console.log(token)
                      //@ts-ignore
                      this.props.history.push({
                          pathname: '/order-success',
                                //@ts-ignore
                              state: { payment: token, items: this.props.cartItems, orderTotal: this.props.total, symbol: this.props.symbol }
                      })
                }
              });
                //@ts-ignore
              handler.open({ name: 'Multikart', description: 'Online Fashion Store', amount: this.amount * 100 })
        } else {
            //@ts-ignore
          this.validator.showMessages();
          // rerender to show messages for the first time
          this.forceUpdate();
        }
    }

    render (){
        //@ts-ignore
        const {cartItems, symbol, total} = this.props;

        // Paypal Integration
        //@ts-ignore
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            //@ts-ignore
            this.props.history.push({
                pathname: '/order-success',
                    state: { payment: payment, items: cartItems, orderTotal: total, symbol: symbol }
            })

        }

        //@ts-ignore
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
        //@ts-ignore
        const onError = (err) => {
            console.log("Error!", err);
        }

        const client = {
            sandbox:    'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
            production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        }


        return (
            <div>

                {/*SEO Support*/}
                <Helmet>
                    <title>MultiKart | CheckOut Page</title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb  title={'Checkout'}/>

                <section className="section-b-space">
                    <div className="container padding-cls">
                        <div className="checkout-page">
                            <div className="checkout-form">
                                <form>
                                    <div className="checkout row">
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-title">
                                                <h3>Billing Details</h3>
                                            </div>
                                            <div className="row check-out">
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">First Name</div>
                                                    {/*//@ts-ignore*/}
                                                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.setStateFromInput} />
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('first_name', this.state.first_name, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Last Name</div>
                                                    {/*//@ts-ignore*/}
                                                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.setStateFromInput} />
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('last_name', this.state.last_name, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Phone</div>
                                                    {/*//@ts-ignore*/}
                                                    <input type="text" name="phone"  value={this.state.phone} onChange={this.setStateFromInput} />
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('phone', this.state.phone, 'required|phone')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Email Address</div>
                                                    {/*//@ts-ignore*/}
                                                    <input type="text" name="email" value={this.state.email} onChange={this.setStateFromInput} />
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('email', this.state.email, 'required|email')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Country</div>
                                                    {/*//@ts-ignore*/}
                                                    <select name="country" value={this.state.country} onChange={this.setStateFromInput}>
                                                        <option>India</option>
                                                        <option>South Africa</option>
                                                        <option>United State</option>
                                                        <option>Australia</option>
                                                    </select>
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('country', this.state.country, 'required')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Address</div>
                                                    {/*//@ts-ignore*/}
                                                    <input type="text" name="address" value={this.state.address} onChange={this.setStateFromInput} placeholder="Street address" />
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('address', this.state.address, 'required|min:20|max:120')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Town/City</div>
                                                    {/*//@ts-ignore*/}
                                                    <input type="text" name="city" value={this.state.city} onChange={this.setStateFromInput} />
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('city', this.state.city, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label">State / County</div>
                                                    {/*//@ts-ignore*/}
                                                    <input type="text" name="state" value={this.state.state} onChange={this.setStateFromInput} />
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('state', this.state.state, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label">Postal Code</div>
                                                    {/*//@ts-ignore*/}
                                                    <input type="text" name="pincode" value={this.state.spincode} onChange={this.setStateFromInput} />
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('pincode', this.state.pincode, 'required|integer')}
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    {/*//@ts-ignore*/}
                                                    <input type="checkbox" name="create_account" id="account-option"  checked={this.state.create_account} onChange={this.setStateFromCheckbox}/>
                                                    &ensp; <label htmlFor="account-option">Create An Account?</label>
                                                    {/*//@ts-ignore*/}
                                                    {this.validator.message('checkbox', this.state.create_account, 'create_account')}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-details">
                                                <div className="order-box">
                                                    <div className="title-box">
                                                        <div>Product <span> Total</span></div>
                                                    </div>
                                                    <ul className="qty">
                                                        {/*//@ts-ignore*/}
                                                        {cartItems.map((item, index) => {
                                                            return <li key={index}>{item.name} × {item.qty} <span>{symbol} {item.sum}</span></li> })
                                                        }
                                                    </ul>
                                                    <ul className="sub-total">
                                                        <li>Subtotal <span className="count">{symbol}{total}</span></li>
                                                        <li>Shipping <div className="shipping">
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="free-shipping" id="free-shipping" />
                                                                    <label htmlFor="free-shipping">Free Shipping</label>
                                                            </div>
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="local-pickup" id="local-pickup" />
                                                                    <label htmlFor="local-pickup">Local Pickup</label>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>

                                                    <ul className="total">
                                                        <li>Total <span className="count">{symbol}{total}</span></li>
                                                    </ul>
                                                </div>

                                                <div className="payment-box">
                                                    <div className="upper-box">
                                                        <div className="payment-options">
                                                            <ul>
                                                                <li>
                                                                    <div className="radio-option stripe">
                                                                        <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => this.checkhandle('stripe')} />
                                                                        <label htmlFor="payment-2">Stripe</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="radio-option paypal">
                                                                        <input type="radio" name="payment-group" id="payment-1" onClick={() => this.checkhandle('paypal')} />
                                                                            <label htmlFor="payment-1">PayPal<span className="image"><img src={`../assets/images/paypal.png`} alt=""/></span></label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {(total !== 0)?
                                                    <div className="text-right">
                                                        {/*//@ts-ignore*/}
                                                        {(this.state.payment === 'stripe')? <button type="button" className="btn-solid btn" onClick={() => this.StripeClick()} >Place Order</button>:
                                                         <PaypalExpressBtn env={'sandbox'} client={client} currency={'USD'} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />}
                                                    </div>
                                                    : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row section-t-space">
                                        <div className="col-lg-6">
                                            <div className="stripe-section">
                                                <h5>stripe js example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4242424242424242</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>2/2020</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>2222</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 m-sm-t-2">
                                            <div className="stripe-section">
                                                <h5>paypal example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4152521541244</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>11/18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>521</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart)
})

export default connect(
    mapStateToProps,
    {removeFromWishlist}
)(checkOut)