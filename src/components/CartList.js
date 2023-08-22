import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMinusCart, setPlusCart, setRemoveCart, setWishList } from '../store/reducers/ui';
import CountCartItem from './CountCartItem';
import { numberWithCommas } from '../helper/data';
import NavBack from './NavBack';
import DataNotFound from './DataNotFound';

const CartList = () => {
    const { carts } = useSelector((state) => state.ui);

    const dispatch = useDispatch()
    const setPlus = (data) => {
        dispatch(setPlusCart(data))
    }
    const setMinus = (data) => {
        dispatch(setMinusCart(data))
    }

    const handleMoveWishlist = (data) => {
        dispatch(setWishList(data))
    }
    const handleRemoveItem = (data) => {
        dispatch(setRemoveCart(data))
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <div className=' mb-1 d-flex justify-content-between'>
                    <div>
                        <CountCartItem />
                    </div>
                    <div>
                        <NavBack />
                    </div>
                </div>
                {carts.length > 0 ? carts?.map((item, index) =>
                    <div className='row mb-3' key={index}>
                        <div className='col-lg-4 col-md-5 col-sm-12 mb-3'>
                            <div className='product-image-container rounded d-flex justify-content-center align-items-center'>
                                <div className='product-image align-items-center'>
                                    <img src={item?.image} className='fit-image ' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-7 col-sm-12 mb-3'>
                            <div className='d-flex justify-content-between'>
                                <div className='me-auto'>
                                    <h4> {item?.name}</h4>
                                    <div>{item.code}</div>
                                    <div>Color : {item.color}</div>
                                    <div>SIZE : {item.code}</div>
                                </div>
                                <div className='w-25'>
                                    <div className="input-group input-group-sm mb-3">
                                        <span className="input-group-text pointer" onClick={() => { setMinus(item) }}>-</span>
                                        <input type="number" value={item?.total} className="form-control" onChange={(e) => { e.preventDefault() }} />
                                        <span className="input-group-text pointer " onClick={() => { setPlus(item) }}>+</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <span className='me-3 text-danger pointer' onClick={() => { handleRemoveItem(item) }}><small>REMOVE ITEM</small></span>
                                    <span className=' text-primary pointer' onClick={() => { handleMoveWishlist(item) }}><small>MOVE WISHLIST</small></span>
                                </div>
                                <div>
                                    ${numberWithCommas(item?.subTotal)}
                                </div>
                            </div>
                        </div>
                    </div >

                ) : <DataNotFound />
                }
            </div>
        </div>
    )
}

export default CartList;
