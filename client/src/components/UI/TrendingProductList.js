import React from 'react';
import TrendingProductCard from './TrendingProductCard';

const TrendingProductList = ({ trendingProducts }) => {
    console.log(trendingProducts);
    return (
        <div className='trending__products-items'>
            {trendingProducts.map((item, index) => (
                <TrendingProductCard item={item} key={index} />
            ))}
        </div>
    );
};

export default TrendingProductList;
