import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAddCart } from '../store/reducers/ui'
import CardImage from './CardImage';
import CardBodyCatalog from './CardBodyCatalog';
import Price from './Price';

const Card = ({ data, isAddChart = true }) => {
    const dispatch = useDispatch()

    const addCart = () => {
        dispatch(setAddCart(data));
    }
    return (
        <div className="product card mb-3" >
            <CardImage image={data?.image} />
            <CardBodyCatalog name={data?.name} short_desc={data?.short_desc} />
            <div className='card-footer'>
                <div className='d-flex justify-content-between'>
                    <Price price={data?.price} />
                    <div>
                        {isAddChart &&
                            <button className='btn btn-sm btn-primary' onClick={() => { addCart() }}> Add Cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
