import '../styles/main.css';
import '../index.html';
import React from 'react';
import { play } from './PolySynth.js';

const App = () => {
    return (
        <React.Fragment>
            <section className='control-panel'>
            
                <button className='play-button' onClick={play}></button>

            <form className='tempo-form'>
                <input className='tempo-input' type='number' id='quantity' min='60' max='160'  />
            </form>

            <input type='range' min='-24' max='1' className='volume-slider'></input>

            <button className='download-button'></button> 

            </section>
        </React.Fragment>

    )
};

export default App;
