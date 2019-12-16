import React from 'react'
import {connect} from 'react-redux'

const Card = props => {
    return (
        <div className='card'>
            <h2>{props.item.name}</h2>
            <h3>${props.item.price}</h3>
            {props.button && <button onClick={() => props.add(props.item, props.count + 1)}>add to cart</button>}
        </div>
    )
}

let mapStateToProps = state => state

export default connect(mapStateToProps)(Card)