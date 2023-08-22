import React, { useEffect } from 'react'
import NavBack from './NavBack'
import { useDispatch } from 'react-redux'
import { setTitlePage } from '../store/reducers/ui'

const Error404 = () => {
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(setTitlePage("Ooops..."))
    }, [])
    return (
        <div className='text-center' >
                <h5>Page not found</h5>
            <div>
                <NavBack title="Back to home" nav='../' />
            </div>
        </div>
    )
}

export default Error404
