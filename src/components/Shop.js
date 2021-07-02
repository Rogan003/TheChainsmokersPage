import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Item from './Item'
import Item1 from '../pics/shop1.png'
import Item2 from '../pics/shop2.png'
import Item3 from '../pics/shop3.png'
import Item4 from '../pics/shop4.png'
import Item5 from '../pics/shop5.png'
import Item6 from '../pics/shop6.png'

const Shop = () => {
    return (
        <div>
            <Header />
            <article class = "shop">
                <Item pic = {Item1} name = "The Chainsmokers Block Tee" price = "40$" />
                <Item pic = {Item2} name = "Black Crystal Triad Hoodie" price = "65$" />
                <Item pic = {Item3} name = "WWJ Tie Dye Hoodie" price = "65$" />
            </article>
            <article class = "shop">
                <Item pic = {Item4} name = "Tan WWJ Tour Beanie" price = "30$" />
                <Item pic = {Item5} name = "Light Blue Album Cover Long Sleeve" price = "50$" />
                <Item pic = {Item6} name = "Large Iredescent Backpack" price = "45$" />
            </article>
            <Footer />
        </div>
    )
}

export default Shop
