// Importing the Tone framework as per their documentation.
import * as Tone from 'tone';

let i = 0;
// Test connections.
export function play() {
	if(i==0){
		Tone.start();
		console.log('play');
		document.getElementById('play-button-image').src = 'assets/pause.png';
		i = 1;
	} else if (i==1){
		console.log('pause');
		document.getElementById('play-button-image').src = 'assets/play.png';
		i = 0;
	}
};




