// Importing the Tone framework as per their documentation.
import * as Tone from 'tone';

let i = 0;
// Test connections.
export function play() {
	if(i==0){
		Tone.start();
		console.log('play');
		i = 1;
	} else if (i==1){
		console.log('pause');
		i = 0;
	}
};




