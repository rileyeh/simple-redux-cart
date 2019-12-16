import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {addToCart} from '../Ducks/reducer'

const Shop = props => {
    let arr = [
        {
            id: 1,
            name: 'shirt',
            price: 30
        },
        {
            id: 2,
            name: 'shoes',
            price: 60
        }
    ]

    let mapped = arr.map(item => {
        return (
            <Card item={item} add={props.addToCart} key={item.id} button={true}/>
        )
    })

    return (
        <div>
            <h1>shop</h1>
            <div>{mapped}</div>
        </div>
    )
}

let mapStateToProps = state => state


export default connect(mapStateToProps, {addToCart})(Shop)