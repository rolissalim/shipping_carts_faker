import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardCatalogWishlists from '../modules/CardCatalogWishlists';
import DataNotFound from '../components/DataNotFound';
import NavBack from '../components/NavBack';
import { setTitlePage } from '../store/reducers/ui';

const Wishlist = () => {
    const { wishList } = useSelector((state) => state.ui);
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(setTitlePage("WishList Carts"))
    }, [])
    return (
        <>
            <div className='d-flex justify-content-between'>
                <div><NavBack title='List Products' nav='../' /></div>
                <div><NavBack title='List Carts' nav='../carts' /></div>

            </div>
            <div className='row'>
                {wishList?.length > 0 ?
                    wishList?.map((item, index) =>
                        <React.Fragment key={index}>
                            <div className='col-lg-4 col-md-6'>
                                <CardCatalogWishlists data={item} />
                            </div>
                        </React.Fragment>
                    )
                    : <DataNotFound />
                }
            </div>


        </>
    )
}

export default Wishlist;
