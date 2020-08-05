import React from 'react'
import  './styles.css'


import vector from '../../assets/Vector 1.png'
import Imagem3 from '../../assets/final (1).jpg'
import Imagem4 from '../../assets/final (2).jpg'
import Imagem1 from '../../assets/final (3).jpg'
import Imagem2 from '../../assets/final (4).jpg'


const Final = () =>(
    <div>
        <div>
            <h1>Trending stories</h1>
          <h1></h1>   
            <a href="/">View all <img src={vector} alt=""/> </a>
        </div>
        <div className="gridd">
            <div>
                <img className='foto' src={Imagem1} alt=""/>
                <div className="texto">
                <h1>The many benefits of  
                taking a healing holiday</h1>
                <p>‘Helaing holidays’ are on the rise 
                tohelp maximise your health and happines...</p>
                <a href="">Read more</a>
                </div>
            </div>
            <div>
            <div className="texto">
                <img className='foto' src={Imagem2} alt=""/>
                <h1>The best Kyoto restaurant
                to try Japanese food</h1>
                <p>From tofu to teahouses, here’s our guide to Kyoto’s
                best restaurants to visit...</p>
                <a href="">Read more</a>
                </div>
            </div>
            <div>
            <div className="texto">

                <img className='foto' src={Imagem3} alt=""/>
                <h1>Skip Chichen Itza and head
                to this remote Yucatan</h1>
                <p>It’s remote and challenging to get,
                but braving the jungle and exploring
                these ruins without the...</p>
                <a href="">Read more</a>
                </div>
            </div>
            <div>
            <div className="texto">

                <img className='foto' src={Imagem4} alt=""/>
                <h1>Surf’s up at these beginner
                spots around the world</h1>
                <p>If learning to surf has in on your to-
                do list for a while, the good news
                is: it’s never too late...</p>
                <a href="">Read more</a>
                </div>
            </div>
        </div>
    </div>
)

export default Final