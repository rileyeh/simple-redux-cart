import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

const Cart = (props) => {
    console.log(props)

    let mappedCart = props.cart.map((item, i) => <Card key={i} item={item} button={false}/>)

    return (
        <div>
            {props.cart.length > 0 && mappedCart}
        </div>
    )
}

let mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Cart)