import React, {Component} from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { SlideToggle } from 'react-slide-toggle';


import {getBrands, getColors, getMinMaxPrice} from '../../../services';
import {filterBrand, filterColor, filterPrice} from '../../../actions'

interface IProps {
    filterBrand?: any
    filterColor?: any
    filters?: any
    brands?: any
    colors? : any
    prices?: any
    filterPrice?: any
}

interface IState {
    openFilter?: any
}

class Filter extends Component<IProps, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            openFilter: false
        }
    }

    closeFilter = () => {
        document.querySelector(".collection-filter")?.setAttribute('style', "left: -365px");
    }

    //@ts-ignore
    clickBrandHendle(event, brands) {

        const index = brands.indexOf(event.target.value);
        if (event.target.checked)
            brands.push(event.target.value); // push in array checked value
        else
            brands.splice(index, 1); // removed in array unchecked value

        this.props.filterBrand(brands);
    }

    //@ts-ignore
    colorHandle(event, color){
        const elems = document.querySelectorAll(".color-selector ul li");
        [].forEach.call(elems, function(el: any) {
            el?.classList.remove("active");
        });
        event.target.classList.add('active');
        this.props.filterColor(color)
    }

    render (){
        const filteredBrands = this.props.filters.brand;
        //console.log(this.props.brands);
        return (
                <div className="collection-filter-block">
                    {/*brand filter start*/}
                    <div className="collection-mobile-back">
                        <span className="filter-back" onClick={(e: any) => this.closeFilter()} >
                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                        </span>
                    </div>
                    <SlideToggle>
                        {(
                            //@ts-ignore
                            {onToggle, setCollapsibleElement}) => (
                            <div className="collection-collapse-block">
                                <h3 className="collapse-block-title" onClick={onToggle}>brand</h3>
                                <div className="collection-collapse-block-content"  ref={setCollapsibleElement}>
                                    <div className="collection-brand-filter">
                                        {this.props.brands.map((brand: any, index: any) => {
                                            return (
                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                    <input type="checkbox" onClick={(e: any) => this.clickBrandHendle(e,filteredBrands)} value={brand} defaultChecked={filteredBrands.includes(brand)? true : false}  className="custom-control-input" id={brand} />
                                                    <label className="custom-control-label"
                                                           htmlFor={brand}>{brand}</label>
                                                </div> )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>

                    {/*color filter start here*/}
                    <SlideToggle>
                        {(
                            //@ts-ignore
                            {onToggle, setCollapsibleElement}
                        ) => (
                            <div className="collection-collapse-block">
                                <h3 className="collapse-block-title" onClick={onToggle}>colors</h3>
                                <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                    <div className="color-selector">
                                        <ul>
                                            {this.props.colors.map((color: any, index: any) => {
                                                return (
                                                    <li className={color} title={color} onClick={(e: any) => this.colorHandle(e, color)} key={index}></li> )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>
                    {/*price filter start here */}
                    <SlideToggle>
                        {(
                            //@ts-ignore
                            {onToggle, setCollapsibleElement}
                        ) => (
                            <div className="collection-collapse-block open">
                                <h3 className="collapse-block-title" onClick={onToggle}>price</h3>
                                <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
                                    <div className="collection-brand-filter">
                                        <div className="custom-control custom-checkbox collection-filter-checkbox">
                                            <InputRange
                                                maxValue={this.props.prices.max}
                                                minValue={this.props.prices.min}
                                                value={this.props.filters.value}
                                                onChange={value => this.props.filterPrice({ value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>
                </div>
        )
    }
}


const mapStateToProps = (state: any) => ({
    brands: getBrands(state.data.products),
    colors: getColors(state.data.products),
    prices: getMinMaxPrice(state.data.products),
    filters: state.filters
})

export default connect(
    mapStateToProps,
    { filterBrand, filterColor, filterPrice }
)(Filter);