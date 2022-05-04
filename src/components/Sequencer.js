// Importing the Tone framework as per their documentation.
import * as Tone from 'tone';

let i = 0;
// Test connections.
export function play() {
	if(i==0){
		
		console.log('play');
		document.getElementById('play-button-image').src = 'assets/pause.png';
		i = 1;
	} else if (i==1){
		console.log('pause');
		document.getElementById('play-button-image').src = 'assets/play.png';
		i = 0;
	}
};


// Sequencer example from: https://www.youtube.com/watch?v=Dxxkma4F-oA&ab_channel=JakeAlbaugh

// document.documentElement.addEventListener('mousedown', () => {
// 	if (Tone.context.state !== 'running') Tone.context.resume();
// });
  
//   const synths = [
// 	new Tone.Synth(),
// 	new Tone.Synth(),
// 	new Tone.Synth()
//   ];
  
//   synths[0].oscillator.type = 'triangle';
//   synths[1].oscillator.type = 'sine';
//   synths[2].oscillator.type = 'sawtooth';
  
//   const gain = new Tone.Gain(0.6);
//   gain.toDestination();
  
//   synths.forEach(synth => synth.connect(gain));
  
//   const rows = [document.getElementsByClassName('row')],
// 		notes = ['G5', 'E4', 'C3'];
//   let index = 0;
  
//   Tone.Transport.scheduleRepeat(repeat, '8n');
//   Tone.Transport.start();
  
//   function repeat(time) {
// 	let step = index % 8;
// 	for (let i = 0; i < rows.length; i++) {
// 	  let synth = synths[i],
// 		  note = notes[i],
// 		  row = rows[i],
// 		  input = row.getElementsByClassName(`input:nth-child(${step + 1})`);
// 	  if (input.checked) synth.triggerAttackRelease(note, '8n', time);
// 	}
// 	index++;
//   }