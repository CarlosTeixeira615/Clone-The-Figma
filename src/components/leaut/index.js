import React from 'react'
import './styles.css';

import Photo from '../../assets/photo.svg'
import Imagem from '../../assets/thousand-01 1.svg'
import Imagem2 from '../../assets/Thousand-02 1.svg'
import Vector from '../../assets/Vector 1.png' 
import Celular from '../../assets/Thousand-03.svg'

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
          <div className='primeiro'>
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
            <button className="button"><h3>Explore</h3></button>
          </div>
            <img className='img margin' src={Imagem} />
        </div >
        <div className="grid segundo">
            <img className='img ' src={Imagem2} />
            <div>
                <div className='format'>
                    <h1>A new way to explore the world </h1>
                    <a>For decades travellers have reached for Lonely Planet books
                     when looking to plan and execute their perfect 
                     trip, but now, they can also 
                     let Lonely Planet Experiences lead the way</a>
                </div>
                <button className="button format"><h3>Explore</h3></button>
            </div>

        </div>
        <div className="paises" >
            <div className="view">
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
        <div className="grid version">
            <div className='guias'>
                <div >
                    <h1>Guides by Thousand Sunny</h1>
                    <a>Packed with tips and advice from our
                        on-the-ground experts, our city guides app
                        (iOS and Android) is the ultimate resource
                        before and during a trip.</a>
                </div>
                <button className="button"><h3>Download</h3></button>
            </div>
            <div className='version2'>

            <img className='img ' src={Celular} />
            </div>

        </div>
        <div className="grid">
            <div className="testemunhas">
                <div className='estrelas'>
                    <h1>Testimonials</h1>
                    <Stars  />
                    <div className='ap'>
                        <a >“Quisque in lacus a urna fermentum euismod.
                            Integer mi nibh, dapibus ac scelerisque eu,
                            facilisis quis purus.
                            Morbi blandit sit amet turpis nec”</a>
                        <h2>Edward Newgate</h2>
                        <p>Founder Circle</p>
                    </div>
                </div>
            </div>
            <img className='imagens' src={Photo} />

        </div>
        <Final />
        <Folter />
    </div>
  
) 

export default Leaut