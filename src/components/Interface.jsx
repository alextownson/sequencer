import '../styles/main.css';
import '../index.html';
import React from 'react';
import { play } from './Sequencer.js';

const Interface = () => {
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

            <section className='seq-container'>{Rows}</section>
        </React.Fragment>
    )
};

const SeqBut = () => {
    return <button className='seq-but'></button>;
};

const Buttons = [];
for (let i = 0; i < 16; i++){
    Buttons.push(SeqBut());
};

const SeqRow = () => {
    return <div className='seq-row'>{Buttons}</div>;
};

const Rows = [];
for (let i = 0; i < 12; i++){
    Rows.push(SeqRow());
};

export default Interface;
