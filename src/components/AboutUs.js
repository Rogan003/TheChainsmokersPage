import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AboutUsText from './AboutUsText'
import TCS from '../pics/tcspic.jpg'

const AboutUs = () => {
    return (
        <div>
            <Header />
            <AboutUsText pic = {TCS} text = "The Chainsmokers is an American electronic DJ and production duo consisting of Alexander Alex Pall and Andrew Drew Taggart. They started out by releasing remixes of songs by indie artists. The EDM-pop duo achieved a breakthrough with their 2014 song #Selfie, which became a top twenty single in several countries. They have won a Grammy award, two American Music Awards, seven Billboard Music Awards and nine iHeartRadio Music Awards. According to Forbes 2019 list of highest paid celebrities, the Chainsmokers were the highest paid DJs, dethroning Calvin Harris after six years." />
            <Footer />
        </div>
    )
}

export default AboutUs
