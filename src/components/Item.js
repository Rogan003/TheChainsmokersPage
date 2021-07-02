import React from 'react'

const Item = (props) => {
    return (
        <section>
            <img src = {props.pic} alt = {props.name} />
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <button>BUY</button>
        </section>
    )
}

export default Item
