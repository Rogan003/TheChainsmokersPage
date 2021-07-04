import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <nav>
                <ul>
                    <li>
                        <Link to = "/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to = "/albums">
                            Albums
                        </Link>
                    </li>
                    <li>
                        <Link to = "/shop">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to = "/aboutus">
                            About us
                        </Link>
                    </li>
                    <li>
                        {props.active}
                    </li>
                </ul>
            </nav>
    )
}

export default Navigation
