// Get Unique Brands from Json Data
export const getBrands = (products: any) => {
    var uniqueBrands: any = [];
    products.map((product: any, index: any) => {
        if (product.tags) {
            product.tags.map((tag: any) => {
                if (uniqueBrands.indexOf(tag) === -1) {
                    uniqueBrands.push(tag);
                }
            })
        }
    })
    //console.log(uniqueBrands)
    return uniqueBrands;
}

// Get Unique Colors from Json Data
export const getColors = (products: any) => {
    var uniqueColors: any = [];
    products.map((product: any, index: any) => {
        if(product.colors) {
            product.colors.map((color: any) => {
                if (uniqueColors.indexOf(color) === -1) {
                    uniqueColors.push(color);
                }
            })
        }
    })
    //console.log(uniqueBrands)
    return uniqueColors;
}

// Get Minimum and Maximum Prices from Json Data
export const getMinMaxPrice = (products: any) => {
    let min = 100, max = 1000;

    products.map((product: any, index: any) => {
        let v = product.price;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    })

    return {'min':min, 'max':max};
}

// @ts-ignore
export const getVisibleproducts = (data: any, { brand, color, value, sortBy }) => {
    return data.products.filter((product: any) => {

        let brandMatch;
        if(product.tags)
            brandMatch = product.tags.some((tag: any) => brand.includes(tag))
        else
            brandMatch = true;

        let colorMatch;
        if(color && product.colors) {
            colorMatch = product.colors.includes(color)
        }else{
            colorMatch = true;
        }

        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        return brandMatch && colorMatch && startPriceMatch && endPriceMatch;
    }).sort((product1: any, product2: any) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.name.localeCompare(product2.name);
        } else if (sortBy === 'DescOrder') {
            return product2.name.localeCompare(product1.name);
        } else{
            return product2.id > product1.id ? -1 : 1;
        }
    });
}

export const getCartTotal = (cartItems: any) => {
    var total = 0;
    for(var i=0; i<cartItems.length; i++){
        const cartItem: any = cartItems[i];
        total += parseInt(cartItem.qty, 10) //*parseInt((cartItem.price*cartItem.discount/100), 10);
    }
    return total;
}

// Get Trending Tag wise Collection
export const getTrendingTagCollection = (products: any, type: any, tag: any) => {
    const items = products.filter((product: any) => {
        return product.category === type && product.tags.includes(tag);
    })
    return items.slice(0,8)
}

// Get Trending Collection
export const getTrendingCollection = (products: any, type: any) => {
    const items = products.filter((product: any) => {
        return product.category === type;
    })
    return items.slice(0,8)
}

// Get Special 5 Collection
export const getSpecialCollection = (products: any, type:any) => {
    const items = products.filter((product: any) => {
        return product.category === type;
    })
    return items.slice(0,5)
}

// Get TOP Collection
export const getTopCollection = (products: any) => {
    const items = products.filter((product: any) => {
        return product.rating > 4;
    })
    return items.slice(0,8)
}

// Get New Products
export const getNewProducts = (products: any, type: any) => {
    const items = products.filter((product: any) => {
        return product.new === true && product.category === type;
    })

    return items.slice(0,8)
}

// Get Related Items
export const getRelatedItems = (products: any, type: any) => {
    const items = products.filter((product: any) => {
        return product.category === type;
    })

    return items.slice(0,4)

}

// Get Best Seller Furniture
export const getBestSellerProducts = (products: any, type: any) => {
    const items = products.filter((product: any) => {
        return product.sale === true && product.category === type;
    })

    return items.slice(0,8)
}

// Get Best Seller
export const getBestSeller = (products: any) => {
    const items = products.filter((product: any) => {
        return product.sale === true;
    })

    return items.slice(0,8)
}

// Get Mens Wear
export const getMensWear = (products: any) => {
    const items = products.filter((product: any) => {
        return product.category === 'men';
    })

    return items.slice(0,8)
}

// Get Womens Wear
export const getWomensWear = (products: any) => {
    const items = products.filter((product: any) => {
        return product.category === 'women';
    })

    return items.slice(0,8)
}

// Get Single Product
export const getSingleItem = (products: any, id: any) => {

    const items = products.find((element: any) => {
        return element.id === id;
    })
    return items;
}

// Get Feature Products
export const getFeatureImages = (products: any, type: any) => {

    const items = products.filter((product: any) => {
        return product.type === type;
    })
    return items;
}


