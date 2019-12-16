import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Shop from './Components/Shop'
import Cart from './Components/Cart'

const App = () => {
    const [view, setView] = useState('s')

    return (
        <div className='app'>
            <Header/>
            <div className='buttons'>
                <button onClick={() => setView('s')}>view shop</button>
                <button onClick={() => setView('c')}>view cart</button>
            </div>
            {view ==='s' && <Shop/>}
            {view ==='c' && <Cart/>}
        </div>
    )
}

export default App