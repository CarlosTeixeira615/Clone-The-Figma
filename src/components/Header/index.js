import React from 'react'
import './styles.css';
import image from  '../../assets/logo.svg'


const Header = () => (
        <div className="logo">
            <img src={image}  width="191" height="45" />
        <div className='menus titulos'>
            <h1 className="home">Home</h1>
            <h1>Destinations</h1>
            <h1>About</h1>
            <h1>Partiner</h1>
        </div>
        <button className="login">
            <h1>
                Login
            </h1>
        </button>
        <button className="register">
            <h1>
                Register
            </h1>
        </button>
        </div>
)

export default Header