import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
    const { titlePage } = useSelector((state) => state.ui);
    return (
        <div className='header d-flex justify-content-center mb-4'>
            <div className='title d-flex align-items-center'>
                {titlePage}
            </div>

        </div>
    )
}

export default Header
