import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {ScrollContext} from 'react-router-scroll-4';
import {IntlReducer as Intl, IntlProvider} from 'react-redux-multilingual'
import './index.scss';

import store from './store';
import {translations} from './constants/translations'
import {getAllProducts} from './actions'
import './App.css';

import Layout from "@components/Layout";
import Landing from "@components/Landing";
import Electronic from "@components/layouts/electronic/main";
import Vegetables from "@components/layouts/vegetables/main";
import Beauty from "@components/layouts/beauty/main";
import Fashion from "@components/layouts/fashion/main";
import Kids from "@components/layouts/kids/main";
import Furniture from "@components/layouts/furniture/main";
import Pets from "@components/layouts/pets/main";
import Watch from "@components/layouts/watch/main";


//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";
import CollectionNoSidebar from "./components/collection/collection-no-sidebar";
import CollectionRightSidebar from "./components/collection/collection-right-sidebar";
import CollectionFullWidth from "./components/collection/collection-full-width";
import CollectionMetro from "./components/collection/collection-metro";

// Extra Pages
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import lookbook from './components/pages/lookbook'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'
import Faq from './components/pages/faq'

// Product Pages
import LeftSideBar from "./components/products/left-sidebar";
import RightSideBar from "./components/products/right-sidebar";
import NoSideBar from "./components/products/no-sidebar";
import LeftImage from "./components/products/left-image";
import RightImage from "./components/products/right-image";
import Accordian from "./components/products/accordian";
import ColumnLeft from "./components/products/column-left";
import ColumnRight from "./components/products/column-right";
import Column from "./components/products/column";
import Vertical from "./components/products/vertical";

// Theme Element
import ElementTitle from "./components/features/theme/element-title"
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./components/features/product/element-product-box"
import ElementProductSlider from "./components/features/product/element-product-slider"
import ElementProductNoSlider from "./components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./components/features/product/element-multiple-slider"
import ElementProductTab from "./components/features/product/element-product-tab"


// Portfolio Features
import GridCols from "./components/features/portfolio/grid-cols"
import MasonaryGridCols from "./components/features/portfolio/masonary-grid-cols"

//!*Blog Pages*!
import BlogPage from "@components/blogs/blog-page";
import RightSidebar from "@components/blogs/right-sidebar";
import BlogDetails from "@components/blogs/details";

// Features
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'
import CollectionNoSideBar from "./components/collection/collection-no-sidebar";

// const translations = {
//     en: {
//         locale: 'en-US',
//         messages: {
//             hello: 'how are you {name}'
//         }
//     },
//     zh: {
//         locale: 'zh',
//         messages: {
//             hello: '你好！你好吗 {name}'
//         }
//     }
// }

// import Layout from "./components/Layout";


const Parent = () => <span>Parent</span>;
const Child = () => <span>child</span>;

class App extends Component<any, any> {

  render() {
    //@ts-ignore
    store.dispatch(getAllProducts());

    // @ts-ignore
    return (
        <Provider store={store}>
          <IntlProvider translations={translations} locale='en'>
            <BrowserRouter basename={'/'}>
              <Switch>
                {/*<Route exact path={'/'} component={Landing}/>*/}
                <Route path={`/vegetables`} component={Vegetables}/>
                <Route path={`/electronic`} component={Electronic}/>
                <Route path={`/furniture`} component={Furniture}/>
                <Route path={`/pets`} component={Pets}/>
                <Route path={`/watch`} component={Watch}/>
                <Route path={`/kids`} component={Kids}/>
                <Route path={`/beauty`} component={Beauty}/>

                <Layout>

                  {/*    /!*Routes For Layouts*!/*/}
                  <Route exact path={`/`} component={Fashion}/>

                  {/*    /!*Routes For Features (Product Collection) *!/*/}
                  <Route path={`/left-sidebar/collection`} component={CollectionLeftSidebar}/>
                  <Route path={`/no-sidebar/collection`} component={CollectionNoSideBar}/>
                  <Route path={`/right-sidebar/collection`} component={CollectionRightSidebar}/>
                  <Route path={`/full-width/collection`} component={(props: any) => <CollectionFullWidth {...props}/>}/>
                  <Route path={`/metro/collection`} component={(props: any) => <CollectionMetro {...props}/>}/>

                  {/*/!*    /!*Routes For Single Product*!/*!/*/}
                  <Route path={`/left-sidebar/product/:id`} component={(props: any) => <LeftSideBar {...props}/>}/>
                  <Route path={`/right-sidebar/product/:id`} component={(props: any) => <RightSideBar {...props}/>}/>
                  <Route path={`/no-sidebar/product/:id`} component={(props: any) => <NoSideBar {...props}/>}/>
                  <Route path={`/col-left/product/:id`} component={(props: any) => <ColumnLeft {...props}/>}/>
                  <Route path={`/col-right/product/:id`} component={(props: any) => <ColumnRight {...props}/>}/>
                  <Route path={`/accordian/product/:id`} component={(props: any) => <Accordian {...props}/>}/>
                  <Route path={`/column/product/:id`} component={(props: any) => <Column {...props}/>}/>
                  <Route path={`/left-image/product/:id`} component={(props: any) => <LeftImage {...props}/>}/>
                  <Route path={`/right-image/product/:id`} component={(props: any) => <RightImage {...props}/>}/>
                  <Route path={`/vertical/product/:id`} component={(props: any) => <Vertical {...props}/>}/>

                  {/*/!*    /!*Routes For custom Features*!/*!/*/}
                  {/*//@ts-ignore*/}
                  <Route path={`/cart`} component={p => <Cart {...p}/>}/>
                  {/*//@ts-ignore*/}
                  <Route path={`/wishlist`} component={p => <wishList {...p}/>}/>
                  <Route path={`/compare`} component={(p: any) => <Compare {...p}/>} />
                  {/*//@ts-ignore*/}
                  <Route path={`/checkout`} component={(p: any) => <checkOut {...p}/>} />
                  {/*//@ts-ignore*/}
                  <Route path={`/order-success`} component={(p: any) => <orderSuccess {...p}/>} />

                  {/*    <Route path={`/sales/orders`} component={(p: any) => <aboutUs {...p}/>} />}}/>*/}

                  {/*    /!*Routes For Extra Pages*!/*/}
                  {/*//@ts-ignore*/}
                  <Route path={`/pages/about-us`} component={(p: any) => <aboutUs {...p}/>} />
                  <Route path={`/pages/404`} component={(p: any) => <PageNotFound {...p}/>} />
                  {/*//@ts-ignore*/}
                  <Route path={`/pages/lookbook`} component={(p: any) => <lookbook {...p}/>} />
                  <Route path={`/pages/login`} component={(p: any) => <Login {...p}/>} />
                  <Route path={`/pages/register`} component={(p: any) => <Register {...p}/>} />
                  <Route path={`/pages/search`} component={(p: any) => <Search {...p}/>} />
                  <Route path={`/pages/collection`} component={(p: any) => <Collection {...p}/>} />
                  <Route path={`/pages/forget-password`} component={(p: any) => <ForgetPassword {...p}/>} />
                  <Route path={`/pages/contact`} component={(p: any) => <Contact {...p}/>} />
                  <Route path={`/pages/dashboard`} component={(p: any) => <Dashboard {...p}/>} />
                  <Route path={`/pages/faq`} component={(p: any) => <Faq {...p}/>} />

                  {/*    /!*Features*!/*/}
                  {/*    /!*Theme Elements*!/*/}
                  <Route path={`/features/element-title`} component={(p: any) => <ElementTitle {...p}/>} />
                  <Route path={`/features/element-banner`} component={(p: any) => <ElementBanner {...p}/>} />
                  <Route path={`/features/element-slider`} component={(p: any) => <ElementSlider {...p}/>} />
                  <Route path={`/features/element-category`} component={(p: any) => <ElementCategory {...p}/>} />
                  <Route path={`/features/element-service`} component={(p: any) => <ElementService {...p}/>} />
                  <Route path={`/features/element-ratio`} component={(p: any) => <ElementRatio {...p}/>} />

                  {/*    /!*Product Elements*!/*/}
                  <Route path={`/features/element-product-box`} component={(p: any) => <ElementProductBox {...p}/>} />
                  <Route path={`/features/element-product-slider`} component={(p: any) => <ElementProductSlider {...p}/>} />
                  <Route path={`/features/element-product-no-slider`} component={(p: any) => <ElementProductNoSlider {...p}/>} />
                  <Route path={`/features/element-product-multiple-slider`} component={(p: any) => <ElementMultipleSlider {...p}/>} />
                  <Route path={`/features/element-product-tab`} component={(p: any) => <ElementProductTab {...p}/>} />

                  {/*    /!*Portfolios*!/*/}
                  <Route path={`/features/portfolio-grid/:columns`} component={(p: any) => <GridCols {...p}/>} />
                  <Route path={`/features/portfolio-masonary/:columns`} component={(p: any) => <MasonaryGridCols {...p}/>} />

                  {/*    /!*Blog Pages*!/*/}
                  <Route path={`/blog/right-sidebar`} component={(p: any) => <RightSidebar {...p}/>} />
                  <Route path={`/blog/details`} component={(p: any) => <BlogDetails {...p}/>} />
                  <Route path={`/blog/blog-page`} component={(p: any) => <BlogPage {...p}/>} />

                  {/*<Route exact path="*" component={PageNotFound} />*/}
                </Layout>
              </Switch>
            </BrowserRouter>
          </IntlProvider>
        </Provider>
    );
  }


}

export default App;
