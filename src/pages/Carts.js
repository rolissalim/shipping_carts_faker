import React, { useEffect } from 'react'
import CartTotal from '../components/CartTotal'
import CartList from '../components/CartList'
import { setTitlePage } from '../store/reducers/ui'
import { useDispatch } from 'react-redux'

const Carts = () => {
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(setTitlePage("Shopping Carts"))
    }, [])
    return (
        <>
            <div className='row'>
                <div className='col-lg-9'>
                    <CartList />
                </div>
                <div className='col-lg-3'>
                    <CartTotal />
                </div>
            </div>


        </>
    )
}

export default Carts;
