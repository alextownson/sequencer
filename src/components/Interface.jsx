import '../styles/main.css';
import '../index.html';
import React from 'react';
import { play } from './Sequencer';

export { Interface };

// This is where I was building the react components.
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

// Couldn't quite figure this out in a reasonable amount of time. I wanted to create a nested array for the buttons. I got the buttons to render but I couldn't figure out the logic to tell which one has been pressed for the synth. 

const SeqBut = () => {
    return <button className='seq-but' name='seq-but' ></button>
}

const Buttons = [];
for (let i = 0; i < 16; i++){
    Buttons.push(<SeqBut></SeqBut>);
};

const SeqRow = () => {
    return <div className='seq-row'>{Buttons}</div>;
};

const Rows = [];
for (let i = 0; i < 12; i++){
    Rows.push(SeqRow());
};

