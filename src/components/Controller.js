const five = require("johnny-five");
const board = new five.Board();

// export these
let controllerTempo;
let oldControllerTempo;
export let controllerVolume;
let oldControllerVolume;
let snapshots = " ";
// This will be an imported variable
let lcdText = " ";


board.on("ready", () => {
  // Create a new `button` hardware instance.
  const playButton = new five.Button(8);
  const dlButton = new five.Button(9);
  const tempoPotentiometer = new five.Sensor("A1");
  const volumePotentiometer = new five.Sensor("A0");
  const lcd = new five.LCD({ 
    pins: [12, 11, 5, 4, 3, 2],
    rows: 2,
    cols: 16 
  });

  // BUTTONS
  
  // On press console log. Connect this to function to play the sequencer.
  playButton.on("press", () => {
    lcdText = 'Play!'
  });

  // On press console log. Connect this to function to download song.
  dlButton.on("press", () => {
    lcdText = 'Downloading...'
  });

  // POTENTIOMETERS

  // http://johnny-five.io/api/sensor/ getting sensor data

  tempoPotentiometer.on("change", () => {
    controllerTempo = tempoPotentiometer.scaleTo(60, 160);

    // Attempting to smooth the varied analog signal... this didn't really work. May need to scrap the potentiometers. 
    // if (controllerTempo < (oldControllerTempo - 1) || controllerTempo > (oldControllerTempo + 1)) {
    //   oldControllerTempo = controllerTempo;
    // } else {
    //   lcdText = `Tempo: ${controllerTempo} BPM`
    // }
  
  });

  volumePotentiometer.on("change", () => {
    controllerVolume = volumePotentiometer.scaleTo(-24, 1);
    // lcdText = `Volume: ${controllerVolume} dB`
  });

  // LCD

  // http://johnny-five.io/api/lcd/

  
  board.loop(100, () => {

    if (snapshots !== lcdText) {
      
      lcd.cursor(0, 0).print("Welcome to SEQ!");

      if (snapshots.length !== lcdText.length) {
        lcd.clear();
        lcd.cursor(0, 0).print("Welcome to SEQ!");
      }

      snapshots = lcdText;
      lcd.cursor(1, 0).print(lcdText);
    }

  });

});