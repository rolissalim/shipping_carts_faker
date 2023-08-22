import React from 'react'
import ProductName from './ProductName';

const CardBodyCatalog = ({ name, short_desc }) => {
    return (
        <div className="card-body">
            <ProductName name={name} />
            <p className="card-text">{short_desc}</p>
        </div>
    )
}

export default CardBodyCatalog;
