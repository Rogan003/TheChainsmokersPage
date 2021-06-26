import React from 'react'
import { Link } from 'react-router-dom'

const MenuPart = (props) => {
    return (
        <article class = "menupart">
            <section>
                <img src = {props.pic} alt = {props.name} />
            </section>
            <section>
                <p>
                    {props.text}
                </p>
                <Link to = {props.link}>
                    <button>
                        {props.name}
                    </button>
                </Link>
            </section>
        </article>
    )
}

export default MenuPart
