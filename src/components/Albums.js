import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Album from './Album'
import Memories from '../pics/memories.jpg'
import SickBoy from '../pics/sickboy.jpg'
import WWJ from '../pics/albumspic.jpg'

const Albums = () => {
    return (
        <div>
            <Header active = "Albums" />
            <article class = "albums">
                <Album name = "Memories... Do Not Open" pic = {Memories} text = "Memories...Do Not Open is the debut studio album by American electronic music duo the Chainsmokers, released on April 7, 2017, by Disruptor Records and Columbia Records. Its release was preceded by the singles Paris and Something Just Like This (in collaboration with Coldplay), both of which reached the top 10 in several national charts. Upon its release, the album received generally mixed reviews from music critics. The album debuted at number one on the US Billboard 200 with 221,000 album-equivalent units, of which 166,000 were pure album sales." />
                <Album name = "Sick Boy" pic = {SickBoy} text = "Sick Boy is the second studio album by American DJ and production duo The Chainsmokers. It was released on December 14, 2018, via Disruptor and Columbia Records. The album features collaborations with French DJ Aazar and fellow American DJ NGHTMRE as well as co-production from Sly, Chris Lyon, and Shaun Frank, and writing credits from frequent co-writer Emily Warren, Kate Morgan, Drew Love of THEY., Tony Ann, Corey Sanders, and Chelsea Jade." />
                <Album name = "World War Joy" pic = {WWJ} text = "World War Joy is the third studio album by American DJ and production duo The Chainsmokers. It was released on December 6, 2019, under Disruptor and Columbia Records. The album features collaborations with Amy Shark, Kygo, Sabrina Claudio, Blink-182, Illenium, Lennon Stella, Bebe Rexha, Ty Dolla $ign, Bülow and 5 Seconds of Summer." />
            </article>
            <Footer />
        </div>
    )
}

export default Albums
