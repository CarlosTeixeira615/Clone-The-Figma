import React from 'react'
import './styles.css';

import Photo from '../../assets/photo.svg'
import Imagem from '../../assets/thousand-01 1.svg'
import Imagem2 from '../../assets/Thousand-02 1.svg'
import Vector from '../../assets/Vector 1.png' 

import Carrocel from '../../assets/carrocel (1).svg' 
import Carroce2 from '../../assets/carrocel (2).svg' 
import Carroce3 from '../../assets/carrocel (3).svg' 
import Carroce4 from '../../assets/carrocel (4).svg' 

import Folter from '../Folter'
import Stars from '../Stars' 
import Final from '../Final'

const Leaut = () => (
    <div >
        <div className='grid'>
          <div >
            <h1>Explore and Travel</h1>
            <h2>Holiday finder</h2>
            <div className="selected">
            <select name="Location" id="">
                <option selected>Location</option> 
            </select>
            <select name="Activity" id="">
                <option selected>Activity</option> 
            </select>
            <select name="Grade" id="">
                <option selected>Grade</option> 
            </select>
            <select name="Date" id="">
                <option selected>Date</option> 
            </select>
            </div>
            <button className="button">Explore</button>
          </div>
            <img className='img' src={Imagem} />
        </div>
        <div className="grid">
            <img className='img' src={Imagem2} />
            <div>
                <div>
                    <h1>A new way to explore the world </h1>
                    <a>For decades travellers have reached for Lonely Planet books
                     when looking to plan and execute their perfect 
                     trip, but now, they can also 
                     let Lonely Planet Experiences lead the way</a>
                </div>
                <button className="button">Explore</button>
            </div>

        </div>
        <div >
            <div>
                <h1>Featured destinations</h1>
                <a href="/">View All <img src={Vector} alt=""/></a>
            </div>
            <div className="imagens">
                <div className="fora">
                    <img src={Carroce4} alt=""/>
                    <div className="p">
                        <h1>Raja Ampat</h1>
                        <p>Indonezia</p>
                    </div>
                </div>
                <div className="fora">
                    <img src={Carrocel} alt=""/>
                    <div className="p">
                        <h1>Fanjingshan</h1>
                        <p>China</p>
                    </div>
                </div>
                <div className="fora">
                    <img src={Carroce2} alt=""/>
                    <div className="p">
                        <h1>Vevey</h1>
                        <p>Switzerland</p>
                    </div>
                </div>
                <div className="fora">
                    <img src={Carroce3} alt=""/>
                    <div className="p">
                        <h1>Skardar</h1>
                        <p>Montenegro</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid">
            <div>
                <div>
                    <h1>Guides by Thousand Sunny</h1>
                    <a>Packed with tips and advice from our
                        on-the-ground experts, our city guides app
                        (iOS and Android) is the ultimate resource
                        before and during a trip.</a>
                </div>
                <button className="button">Download</button>
            </div>
            <img className='img' src={Imagem2} />

        </div>
        <div className="grid">
            <div>
                <div>
                    <h1>Testimonials</h1>
                    <Stars />
                    <a>“Quisque in lacus a urna fermentum euismod.
                        Integer mi nibh, dapibus ac scelerisque eu,
                        facilisis quis purus.
                        Morbi blandit sit amet turpis nec”</a>
                    <h1>Edward Newgate</h1>
                    <p>Founder Circle</p>
                </div>
            </div>
            <img className='img' src={Photo} />

        </div>
        <Final />
        <Folter />
    </div>
  
) 

export default Leaut