import React from 'react'
import { useSelector } from 'react-redux';
import NavBack from './NavBack';

const CountCartItem = ({ nav = "/carts" }) => {
    const { totalCart } = useSelector((state) => state.ui);
    return (
        <>
            <div>
                <NavBack nav={nav} title={`Carts (${totalCart} items)`} />
            </div>
        </>
    )
}

export default CountCartItem
