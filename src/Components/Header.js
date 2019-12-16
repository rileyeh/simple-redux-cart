import React from 'react'
import {connect} from 'react-redux'

const Header = props => {
    console.log('hedaer:', props)
    return (
        <div className='header'>
            <h1>riley's store</h1>
            <h1>items in cart: {props.count}</h1>
        </div>
    )
}

let mapStateToProps = state => state

export default connect(mapStateToProps)(Header)