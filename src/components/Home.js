import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MenuPart from './MenuPart'
import Albums from '../pics/albumspic.jpg'
import Shop from '../pics/shoppic.png'
import AboutUs from '../pics/aboutuspic.jpg'

const Home = () => {
    return (
        <div>
            <Header active = "Home" />
            <MenuPart name = "Albums" text = "The Chainsmokers currently have 3 albums recorded. Fourth will be here soon. Click here to listen to them!" pic = {Albums} link = "/albums" />
            <MenuPart name = "Shop" text = "You want to buy some TCS stuff? No problem! Click here to do that. Quality first!" pic = {Shop} link = "/shop" />
            <MenuPart name = "About us" text = "You dont know much about TCS? Click here to find out more!" pic = {AboutUs} link = "/aboutus" />
            <Footer />
        </div>
    )
}

export default Home
