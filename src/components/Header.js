import React from 'react'
import Navigation from './Navigation'

const Header = (props) => {
    return (
        <header>
           <Navigation active = {props.active} />
           <section></section>
        </header>
    )
}

export default Header
