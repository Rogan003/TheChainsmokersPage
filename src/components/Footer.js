import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <span>Contact:</span>
            <div>
                <FaEnvelope />
                Booking-Email: 
                <a href="mailto: thechainsmokers@caa.com" rel="noopener noreferrer" target = "_blank">
                    thechainsmokers@caa.com
                </a>
            </div>
            <div>
                <FaPhoneAlt />
                Phone number: +1 212-969-8427
            </div>
            <div>
                <FaFacebookSquare />
                Facebook: 
                <a href = "https://www.facebook.com/thechainsmokers" rel="noopener noreferrer" target = "_blank">
                    The Chainsmokers
                </a>
            </div>
            <div>
                <FaInstagramSquare />
                Instagram: 
                <a href="https://www.instagram.com/thechainsmokers/" rel="noopener noreferrer" target = "_blank">
                    thechainsmokers
                </a>
            </div>
            <div>
                Made by Rogan003
            </div>
        </footer>
    )
}

export default Footer
