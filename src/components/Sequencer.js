// Importing the Tone framework as per their documentation.
import * as Tone from 'tone';

export {play};

let synth = new Tone.PolySynth(Tone.Synth).toDestination(),
	playing = false;

// start audio context on user mouse press 
document.documentElement.addEventListener('mousedown', () => {
	if (Tone.context.state !== 'running') Tone.context.resume();
});

// Test connections.
function play () {
	if(playing == false){
		Tone.Transport.start();
		document.getElementById('play-button-image').src = 'assets/pause.png';
		playing = true;
	} else if (playing == true){
		console.log('pause');
		document.getElementById('play-button-image').src = 'assets/play.png';
		playing = false;
	}
};

// volume
Tone.Destination.volume.value = 1; 
// notes
const notes = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];
// sequence



document.addEventListener("DOMContentLoaded", () =>{
	const rows = document.body.querySelectorAll('seq-row');
	let index = 0;

	Tone.Transport.scheduleRepeat(repeat, '8n');

	function repeat(time) {
	let step = index % 8;
	for (let i = 0; i < rows.length; i++) {
  			let note = notes[i],
	  		row = rows[i],
	  		input = row.querySelector(`input:nth-child(${step + 1})`);
  		if (input.value) synth.triggerAttackRelease(note, '8n', time);
			}
		index++;
	}	
});





//  Getting the key 
// document.addEventListener("DOMContentLoaded", () =>{
// 	const rows = document.getElementsByClassName('seq-row')

// 	for(let i = 0; i < rows.length; i++){			
// 		rows[i].addEventListener('click',function(){
// 			synth.triggerAttackRelease(notes[i], '16n');
// 		});
// 	}	
	
// });
