import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CountCartItem from '../components/CountCartItem';
import CardCatalogProduct from '../modules/CardCatalogProduct';
import WishlistCountItems from '../components/WishlistCountItems';
import { setTitlePage } from '../store/reducers/ui';
import DataNotFound from '../components/DataNotFound';

const Products = () => {
    const { products } = useSelector((state) => state.ui);
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(setTitlePage("Products"))
    }, [])
    return (
        <>
            <div className='d-flex justify-content-between'>
                <CountCartItem />
                <WishlistCountItems />
            </div>
            <div className='row'>
                {products?.length > 0 ?

                    products?.map((item, index) =>
                        <React.Fragment key={index}>

                            <div className='col-lg-4 col-md-6'>
                                <CardCatalogProduct data={item} />
                            </div>
                        </React.Fragment>
                    )
                    : <DataNotFound />
                }
            </div>

        </>
    )
}

export default Products;
