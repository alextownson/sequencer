// Importing the Tone framework as per their documentation.
import * as Tone from 'tone';

// Test connections
document.getElementById('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
});




