import React from 'react'
import { Link } from 'react-router-dom'

const AboutUsText = (props) => {
    return (
        <article class = "aboutus">
            <section>
                {/*state carousel?*/}
                <img src = {props.pic} alt = "The Chainsmokers" />
                <p>
                    {props.text}
                </p>
                <p>
                    Go listen to our music!
                </p>
                <Link to = '/albums'>
                    <button>
                        Albums
                    </button>
                </Link>
            </section>
        </article>
    )
}

export default AboutUsText
