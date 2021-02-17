import React from 'react'
import {Link} from 'gatsby'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog Page</Link>
                </li>
                <li>
                    <Link to="/products">Products Page</Link>
                </li>
                <li>
                    <Link to="/examples">Examples Page</Link>
                </li>
                <li>
                    <Link to="/images">Images Page</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
