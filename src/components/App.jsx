import '../styles/main.css';
import '../index.html';
import React from 'react';
import { play } from './PolySynth.js';
import playImage from '../assets/play.png';
import tempoImage from '../assets/tempo.png';


const App = () => {
    return (
        <React.Fragment>
            <section className='controls'>
                {/*This never worked no matter what I did. I had to find a workaround.*/}
                {/* <img scr={playImage} className='play-button' onClick={play} /> */}
            </section>
        </React.Fragment>

    )
};

export default App;
