import React from 'react'
import { Link } from "react-router-dom"

const TrendingproductCard = ({ item }) => {
    return (
        <>
            <div className='trending__products__item'>
                <Link to={`/shop/${item.id}`}>
                    <div className='trending__products__item-img'>
                        <img src={item.imgUrl} alt="trending products" />
                    </div>
                </Link>
                <div className='trending__products__item-details'>
                    <h3>{item.productName}</h3>
                    <span>{item.category}</span>
                    <div className='trending__products__item-details-bottom'>
                        <span className='trending__products__item-details-bottom-price'>${item.price}</span>
                        <button className='trending__products__item-details-bottom-addBtn'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingproductCard