import React from 'react'
import './Header.css'

const img_carrito = 'https://cdn-icons-png.flaticon.com/256/3737/3737372.png'



export const Header = ({count}) => {
    return (
        <>
            <section className='header'>
                <div id='titulo'>
                    <h1>FAKE STORE CAPS</h1>
                </div>
                <div className='carrito'>
                    <img src={img_carrito} alt="" />
                    <span>{count}</span>
                </div>
            </section>
        </>
    )
}

