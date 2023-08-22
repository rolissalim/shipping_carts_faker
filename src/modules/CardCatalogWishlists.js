import React from 'react'
import { useDispatch } from 'react-redux'
import ProductNamePrice from '../components/ProductNamePrice';
import { setAddCart, setRemoveWishlist } from '../store/reducers/ui';
import CardImage from '../components/CardImage';

const CardCatalogWishlists = ({ data }) => {
    const dispatch = useDispatch()

    const addCart = (data) => {
        dispatch(setAddCart(data));
        dispatch(setRemoveWishlist(data));
    }
    const handleRemoveWishlist = (data) => {
        dispatch(setRemoveWishlist(data));
    }
    return (
        <div className="wishlist card mb-3" >
            <CardImage image={data?.image} />
            <div className='card-body'>
                <ProductNamePrice name={data?.name} price={data?.price} />
                <div>{data?.short_desc}</div>

            </div>
            <div className='card-footer'>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-sm btn-primary' onClick={(e) => { addCart(data) }}> Add Cart</button>
                    <button className='btn btn-sm btn-danger' onClick={(e) => { handleRemoveWishlist(data) }}> Remove Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default CardCatalogWishlists;
