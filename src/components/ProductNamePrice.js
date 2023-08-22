import React from 'react'
import ProductName from './ProductName'
import Price from './Price'

const ProductNamePrice = ({ name, price }) => {
    return (
        <div className='d-flex justify-content-between'>
            <div>
                <ProductName name={name} />
            </div>
            <div>
                <Price price={price} />
            </div>
        </div>
    )
}

export default ProductNamePrice
