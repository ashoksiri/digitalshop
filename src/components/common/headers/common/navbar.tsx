import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'

interface IProps {
    translate?: any
}

interface IState {
    navClose?: any
}

class NavBar extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            navClose: { right: '0px' }
        }
    }

    componentWillMount() {
        if (window.innerWidth < 750) {
            this.setState({ navClose: { right: '-410px' } })
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { right: '-300px' } })
        }
    }

    openNav() {
        console.log('open')
        this.setState({ navClose: { right: '0px' } })
    }
    closeNav() {
        this.setState({ navClose: { right: '-410px' } })
    }

    onMouseEnterHandler() {
        if (window.innerWidth > 1199) {
            document.querySelector("#main-menu")?.classList.add("hover-unset");
        }
    }

    handleSubmenu = (event: any) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container')?.classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    handleMegaSubmenu = (event: any) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
            event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
        else{
            document.querySelectorAll('.menu-content').forEach(function (value) {
                value.classList.remove('opensubmegamenu');
            });
            event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
        }
    }

    render() {
        const { translate } = this.props;
        return (
            <div>
                <div className="main-navbar">
                    <div id="mainnav" >
                        <div className="toggle-nav" onClick={this.openNav.bind(this)} >
                            <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu" style={this.state.navClose}>
                            <li className="back-btn" onClick={this.closeNav.bind(this)} >
                                <div className="mobile-back text-right">
                                    <span >Back</span>
                                    <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e: any) => this.handleSubmenu(e)}>
                                    {translate('home')}
                                    <span className="sub-arrow"></span>
                                </Link>
                                <ul className="nav-submenu" >
                                    <li><Link to={`/fashion`} >{translate('fashion')}</Link></li>
                                    <li><Link to={`/beauty`} >{translate('beauty')}</Link></li>
                                    <li><Link to={`/electronic`} >{translate('electronic')}</Link></li>
                                    <li><Link to={`/furniture`} >{translate('furniture')}</Link></li>
                                    <li><Link to={`/kids`} >{translate('kids')}</Link></li>
                                    <li><Link to={`/pets`} >{translate('pets')}</Link></li>
                                    <li><Link to={`/vegetables`} >{translate('vegetables')}</Link></li>
                                    <li><Link to={`/watch`} >{translate('watch')}</Link></li>
                                </ul>
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e: any) => this.handleSubmenu(e)}>
                                    {translate('shop')}
                                    <span className="sub-arrow"></span>
                                </Link>
                                <ul className="nav-submenu">
                                    <li><Link to={`/left-sidebar/collection`} >{translate('category_left_sidebar')}</Link></li>
                                    <li><Link to={`/right-sidebar/collection`} >{translate('category_right_sidebar')}</Link></li>
                                    <li><Link to={`/no-sidebar/collection`} >{translate('category_no_sidebar')}</Link></li>
                                    <li><Link to={`/metro/collection`} >{translate('category_metro')}</Link></li>
                                    <li><Link to={`/full-width/collection`} >{translate('category_full_width')}</Link></li>
                                </ul>
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e: any) => this.handleSubmenu(e)}>
                                    {translate('products')}
                                    <span className="sub-arrow"></span>
                                </Link>
                                <ul className="nav-submenu">
                                    <li><Link to={`/left-sidebar/product/1`} >{translate('left_sidebar')}</Link></li>
                                    <li><Link to={`/right-sidebar/product/1`} >{translate('right_sidebar')}</Link></li>
                                    <li><Link to={`/no-sidebar/product/1`} >{translate('no_sidebar')}</Link></li>
                                    <li><Link to={`/col-left/product/1`} >{translate('three_col_thumbnail_left')}</Link></li>
                                    <li><Link to={`/col-right/product/1`} >{translate('three_col_thumbnail_right')}</Link></li>
                                    <li><Link to={`/column/product/1`} >{translate('thumbnail_below')}</Link></li>
                                    <li><Link to={`/left-image/product/1`} >{translate('thumbnail_left')}</Link></li>
                                    <li><Link to={`/right-image/product/1`} >{translate('thumbnail_right')}</Link></li>
                                </ul>
                            </li>
                            <li className="mega-menu">
                                <Link to="#" className="dropdown" onClick={(e: any) => this.handleSubmenu(e)}>
                                    {translate('features')}
                                    <span className="sub-arrow"></span>
                                </Link>
                                <div className="mega-menu-container" >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e: any) => this.handleMegaSubmenu(e)}>
                                                            {translate('portfolio')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><Link to={`/features/portfolio-grid/2`} >{translate('portfolio_grid_2')}</Link></li>
                                                            <li><Link to={`/features/portfolio-grid/3`} >{translate('portfolio_grid_3')}</Link></li>
                                                            <li><Link to={`/features/portfolio-grid/4`} >{translate('portfolio_grid_4')}</Link></li>
                                                            <li><Link to={`/features/portfolio-masonary/2`} >{translate('portfolio_masonary_2')}</Link></li>
                                                            <li><Link to={`/features/portfolio-masonary/3`} >{translate('portfolio_masonary_3')}</Link></li>
                                                            <li><Link to={`/features/portfolio-masonary/4`} >{translate('portfolio_masonary_4')}</Link></li>
                                                            <li><Link to={`/features/portfolio-masonary/full`} >{translate('portfolio_masonary_full')}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e: any) => this.handleMegaSubmenu(e)}>
                                                            {translate('theme_elements')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><Link to={`/features/element-title`} >{translate('element_title')}</Link></li>
                                                            <li><Link to={`/features/element-banner`} >{translate('collection_banner')}</Link></li>
                                                            <li><Link to={`/features/element-slider`} >{translate('home_slider')}</Link></li>
                                                            <li><Link to={`/features/element-category`} >{translate('category')}</Link></li>
                                                            <li><Link to={`/features/element-service`} >{translate('service')}</Link></li>
                                                            {/*<li><Link to={`/features/element-ratio`} >{translate('image_size_ratio')}</Link></li>*/}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e: any) => this.handleMegaSubmenu(e)}>
                                                            {translate('product_elements')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li className="up-text"><Link to={`/features/element-product-box`} >{translate('product_box')}<span>10+</span></Link></li>
                                                            <li><Link to={`/features/element-product-slider`} >{translate('product_slider')}</Link></li>
                                                            <li><Link to={`/features/element-product-no-slider`} >{translate('no_slider')}</Link></li>
                                                            <li><Link to={`/features/element-product-multiple-slider`} >{translate('multi_slider')}</Link></li>
                                                            <li><Link to={`/features/element-product-tab`} >{translate('tab')}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e: any) => this.handleMegaSubmenu(e)}>
                                                            {translate('email_template')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li><Link to={`/email-template.html`} target="_blank">{translate('order_success')}</Link></li>
                                                            <li><Link to={`/email-template-two.html`} target="_blank">{translate('order_success')}2</Link></li>
                                                            <li><Link to={`/email-order-success.html`} target="_blank">{translate('email_template')}</Link></li>
                                                            <li><Link to={`/email-order-success-two.html`} target="_blank">{translate('email_template')}2</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title">
                                                        <h5 onClick={(e: any) => this.handleMegaSubmenu(e)}>
                                                            {translate('accessories')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li><a href="#">{translate('fashion_jewellery')}</a></li>
                                                            <li><a href="#">{translate('caps_and_hats')}</a></li>
                                                            <li><a href="#">{translate('precious_jewellery')}</a></li>
                                                            <li><a href="#">{translate('necklaces')}</a></li>
                                                            <li><a href="#">{translate('earrings')}</a></li>
                                                            <li><a href="#">{translate('rings_wrist_wear')}</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e: any) => this.handleMegaSubmenu(e)}>
                                                            {translate('men_accessories')}
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li><a href="#">{translate('ties')}</a></li>
                                                            <li><a href="#">{translate('cufflinks')}</a></li>
                                                            <li><a href="#">{translate('pockets_squares')}</a></li>
                                                            <li><a href="#">{translate('helmets')}</a></li>
                                                            <li><a href="#">{translate('scarves')}</a></li>
                                                            <li><a href="#">{translate('phone_cases')}</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="#" className="nav-link" onClick={(e: any) => this.handleSubmenu(e)}>
                                    {translate('pages')}
                                    <span className="sub-arrow"></span>
                                </Link>
                                <ul className="nav-submenu">
                                    <li><Link to={`/pages/about-us`} >{translate('about_us')}</Link></li>
                                    <li><Link to={`/pages/404`} >404</Link></li>
                                    <li><Link to={`/pages/lookbook`} >{translate('lookbook')}</Link></li>
                                    <li><Link to={`/pages/login`} >{translate('login')}</Link></li>
                                    <li><Link to={`/pages/register`} >{translate('register')}</Link></li>
                                    <li><Link to={`/pages/search`} >{translate('search')}</Link></li>
                                    <li><Link to={`/pages/collection`} >{translate('collection')}</Link></li>
                                    <li><Link to={`/pages/forget-password`} >{translate('forget_password')}</Link></li>
                                    <li><Link to={`/pages/contact`} >{translate('contact')}</Link></li>
                                    <li><Link to={`/pages/dashboard`} >{translate('dashboard')}</Link></li>
                                    <li><Link to={`/pages/faq`} >{translate('FAQ')}</Link></li>
                                </ul>
                            </li>
                            <li >
                                <Link to="#" className="nav-link" onClick={(e: any) => this.handleSubmenu(e)}>
                                    {translate('blog')}
                                    <span className="sub-arrow"></span>
                                </Link>
                                <ul className="nav-submenu">
                                    <li><Link to={`/blog/blog-page`} >{translate('blog_left_sidebar')}</Link></li>
                                    <li><Link to={`/blog/right-sidebar`} >{translate('blog_right_sidebar')}</Link></li>
                                    <li><Link to={`/blog/details`} >{translate('blog_detail')}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslate(NavBar);