import React from 'react';
import best_seller1 from './images/best_seller1.jpeg'
import best_seller2 from './images/best_seller2.jpeg'
import best_seller3 from './images/best_seller3.jpeg'
import best_seller4 from './images/best_seller4.jpeg'

import Growth from  './images/growth.jpeg';
import Integrity from  './images/integrity.png';
import Visibility from  './images/visibility.jpeg';
import Partnership from  './images/partnership.jpeg'
import AuthorPicture from './images/author_picture.jpeg'


import './HomeBody.css';

export default function HomeBody () {
    
    return (
        <div style={{padding: '10px'}}>
            <div className='headings'>
                <h1>Dr. Abiola Fashina (esq.)</h1>
            </div>
            <div>
                <img id='author-picture' src={AuthorPicture} alt="Picture of Dr. Abiola Fashina (esq.)" />
            </div>
            <div className='headings'>
                <h2>My Vision and Mission Statement</h2>
            </div>
            <div id='vision-mission-statement'>
                <p>
                    <i>
                        A Soldier of Christ Jesus. An Evangelist. To spread and help spread the gospel of our Lord Jesus Christ 
                        to all the earth using social media as a tool. To equip Churches
                        and Ministers of Christ to harness the power of social
                        media to spread the fragrance of Christ into the world and 
                        foster peer to peer connection to bring about meaningful growth
                        and achievement within the body of Christ.
                    </i>
                </p>
            </div>
            <div className='headings'>
                <h2>What I Stand For</h2>
            </div>
            <div id='identity'>
                <div>
                    <img src={Growth} alt="I stand for growth" />
                    <p>
                        Growth
                    </p>
                </div>
                <div>
                    <img src={Integrity} alt="I stand for integrity" />
                    <p>
                        Integrity
                    </p>
                </div>
                <div>
                    <img src={Visibility} alt="I stand for visibility" />
                    <p>
                        Visibility 
                    </p>
                </div>
                <div>
                    <img src={Partnership} alt="I stand for partnership" />
                    <p>
                        Partnership
                    </p>
                </div>
            </div>
            <div className='headings'>
                <h3>While you are here, view Some of my bestsellers</h3>
            </div>
            <div id='best-sellers'>
                <img src={best_seller1} alt="best_seller1" />
                <img src={best_seller2} alt="best_seller2" />
                <img src={best_seller3} alt="best_seller3" />
                <img src={best_seller4} alt="best_seller4" />
            </div>

        </div>
    )
}