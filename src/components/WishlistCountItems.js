import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WishlistCountItems = () => {
    const { totalWishList } = useSelector((state) => state.ui);
    const navigate = useNavigate()
    return (
        <>
            <div>
                {totalWishList > 0 &&
                    <span className='mb-3 pointer' onClick={() => { navigate("/wishlists") }}>Wishlist ({totalWishList} items)</span>
                }
            </div>
        </>
    )
}

export default WishlistCountItems
