import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBack = ({ nav = "../", title = "List Products" }) => {
    const navigate = useNavigate()

    return (
        <span className='pointer' onClick={() => { navigate(nav) }}>{title}</span>
    )
}

export default NavBack
