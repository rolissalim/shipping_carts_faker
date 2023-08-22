import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { numberWithCommas } from '../helper/data';
import { setCheckout } from '../store/reducers/ui';

const CartTotal = () => {
    const { totalPrice } = useSelector((state) => state.ui);
    const [transaction, setTransaction] = useState(false)
    const dispatch = useDispatch()
    const handleCheckout = () => {
        setTransaction(true)
        dispatch(setCheckout())
    }
    useEffect(() => {
        return () => {
            setTransaction(false)
        }
    }, [])

    console.log("transaction", transaction);

    return (
        <div className='card cart-total'>
            <div className='card-body'>
                <h5>Total amount of</h5>
                <div className='d-flex justify-content-between'>
                    <div>Temporary amount</div>
                    <div>${numberWithCommas(totalPrice) || 0}</div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>Shopping</div>
                    <div>Gratis</div>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div>
                        <div><strong>The total amount of</strong></div>
                        <h6>Include VAT</h6>
                    </div>
                    <div>${numberWithCommas(totalPrice)}</div>
                </div>
                {totalPrice > 0 &&
                    <div className="d-grid gap-2 mt-2">
                        <button className="btn btn-primary" type="button" onClick={() => { handleCheckout() }}>Checkout Cart</button>
                    </div>
                }

                {transaction &&
                    <div className='d-flex justify-content-center'>
                        <div className='badge bg-success'>Transaction Done</div>
                    </div>
                }

            </div>
        </div>
    )
}

export default CartTotal
