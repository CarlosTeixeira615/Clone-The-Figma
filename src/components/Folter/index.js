import React from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import frame1 from '../../assets/frame (1).png'
import frame2 from '../../assets/frame (2).png'
import frame3 from '../../assets/frame (3).png'
import frame4 from '../../assets/frame (4).png'
import frame5 from '../../assets/frame (5).png'


const Folder =() => (
    <footer className="folder">
        <div>
            <div className="final grids">
            <div>
                <img src={logo} alt=""/>
                <p>Plan and book your perfect trip with 
                expert advice, travel tips destination
                information from us</p>
                <p>©2020 Thousand Sunny. All rights reserved</p>
            </div>
            <div>
                <h3>Destination</h3>
                <li>Africa</li>
                <li>Antartica</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>America</li>
            </div>
            <div>
                <h3>Shop</h3>
                <li>Destination Guides</li>
                <li>Pictorial & Gifts</li>
                <li>Special Offers</li>
                <li>Delivery Times</li>
                <li>FAQs</li>
            </div>
            <div>
                <h3>Interests</h3>
                <li>Adventure Travel</li>
                <li>Art and Culture</li>
                <li>Wildlife And Nature</li>
                <li>Family Holidays</li>
                <li>Food And Drink</li>
            </div>
        </div>
        <div className='frames icones'>
            <img src={frame1} alt=""/>
            <img src={frame2} alt=""/>
            <img src={frame3} alt=""/>
            <img src={frame4} alt=""/>
            <img src={frame5} alt=""/>
        </div>
        </div>

    </footer>
)
export default Folder