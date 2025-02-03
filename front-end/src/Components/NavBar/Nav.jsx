import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link " aria-current="page">Sing in</Link>
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link " aria-current="page">Sing Up</Link>
                </li>
            </ul>
        </>
    )
}
export default Nav