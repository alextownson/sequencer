// Importing the Tone framework as per their documentation.
import * as Tone from 'tone';
// export the play function to be used onclick for the play image.
export {play};

let synth = new Tone.PolySynth(Tone.Synth).toDestination(),
	playing = false;

// start audio context on user mouse press 
document.documentElement.addEventListener('mousedown', () => {
	if (Tone.context.state !== 'running') Tone.context.resume();
});

// play the sequence
function play () {
	if(playing == false){
		Tone.Transport.start();
		document.getElementById('play-button-image').src = 'assets/pause.png';
		playing = true;
	} else if (playing == true){
		Tone.Transport.pause();
		console.log('pause');
		document.getElementById('play-button-image').src = 'assets/play.png';
		playing = false;
	}
};

// This will  be updated with the values from the sequencer. Might make more sense to use pattern or seq. Need to do more research.
const loop = new Tone.Loop((time) => {
	synth.triggerAttackRelease(222, '16n')
	console.log(time);
}, "8n").start(0);


// volume: This will be connected to the slider value
Tone.Destination.volume.value = 1; 
// notes
const notes = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];
// sequence

// Attach keys to the rows of buttons. I couldn't figure out the logic to get the individual buttons.
document.addEventListener("DOMContentLoaded", () =>{
	const rows = document.getElementsByClassName('seq-row')

	for(let i = 0; i < rows.length; i++){			
		rows[i].addEventListener('click',function(){
			synth.triggerAttackRelease(notes[i], '16n');
		});
	}	
	
});
