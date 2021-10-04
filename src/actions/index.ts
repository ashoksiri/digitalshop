import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import store from "../store";
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const fetchProductsBegin = () => ({
    type: types.FETCH_PRODUCTS_BEGIN
});



export const receiveProducts = (products: any) => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => (dispatch: any) => {
    dispatch(fetchProductsBegin());
    shop.getProducts((products: any) => {
        dispatch(receiveProducts(products));
        return products;
    })
}
export const fetchSingleProduct = (productId : any) => ({
    type: types.FETCH_SINGLE_PRODUCT,
    productId
})




//it seems that I should probably use this as the basis for "Cart"
export const addToCart = (product: any,qty: any) => (dispatch: any) => {
    toast.success("Item Added to Cart");
        dispatch(addToCartUnsafe(product, qty))

}
export const addToCartAndRemoveWishlist = (product: any,qty: any) => (dispatch: any) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty));
    dispatch(removeFromWishlist(product));
}
export const addToCartUnsafe = (product: any, qty: any) => ({
    type: types.ADD_TO_CART,
    product,
    qty
});
export const removeFromCart = (product_id: any) => (dispatch: any) => {
    toast.error("Item Removed from Cart");
    dispatch({
        type: types.REMOVE_FROM_CART,
        product_id
    })
};
export const incrementQty = (product: any,qty: any) => (dispatch: any) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const decrementQty = (productId: any) => (dispatch: any) => {
    toast.warn("Item Decrement Qty to Cart");

    dispatch({
    type: types.DECREMENT_QTY,
    productId})
};



//it seems that I should probably use this as the basis for "Wishlist"
export const addToWishlist = (product: any) => (dispatch: any) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))

}
export const addToWishlistUnsafe = (product: any) => ({
    type: types.ADD_TO_WISHLIST,
    product
});
export const removeFromWishlist = (product_id: any) => (dispatch: any) => {
    toast.error("Item Removed from Wishlist");
    dispatch({
        type: types.REMOVE_FROM_WISHLIST,
        product_id
    })
};


//Compare Products
export const addToCompare = (product: any) => (dispatch: any) => {
    toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))

}
export const addToCompareUnsafe= (product: any) => ({
    type: types.ADD_TO_COMPARE,
    product
});
export const removeFromCompare = (product_id: any) => ({
    type: types.REMOVE_FROM_COMPARE,
    product_id
});


// Filters
export const filterBrand = (brand: any) => ({
    type: types.FILTER_BRAND,
    brand
});
export const filterColor = (color: any) => ({
    type: types.FILTER_COLOR,
    color
});
export const filterPrice = (value: any) => ({
    type: types.FILTER_PRICE,
    value
});
export const filterSort = (sort_by: any) => ({
    type: types.SORT_BY,
    sort_by
});


// Currency
export const changeCurrency = (symbol: any) => ({
    type: types.CHANGE_CURRENCY,
    symbol
});

