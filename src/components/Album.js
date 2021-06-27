import React from 'react'
import { FaPlay } from "react-icons/fa";

const Album = (props) => {
    return (
        <section>
            <img src = {props.pic} alt = "Album pic" />
            <h3>{props.name}</h3>
            <p>
                {props.text}
            </p>
            <button><FaPlay /> Play</button>
        </section>
    )
}

export default Album
