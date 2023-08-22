import React from 'react'
import { useDispatch } from 'react-redux'
import Price from '../components/Price';
import { setAddCart } from '../store/reducers/ui';
import CardImage from '../components/CardImage';
import CardBodyCatalog from '../components/CardBodyCatalog';
const CardCatalogProduct = ({ data, isAddChart = true }) => {
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

export default CardCatalogProduct;
