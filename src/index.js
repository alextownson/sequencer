// loads in the html file
require('file-loader?name=[name].[ext]!./index.html')
// Importing the React framework
import React from 'react';
// React v18 new root API: https://blog.saeloun.com/2021/07/15/react-18-adds-new-root-api.html
import { createRoot } from 'react-dom/client';
// importing the css file
import './main.css'
// Import from tone app
import { play } from './polysynth.js'


// When I use require to get my image, it points the distribution html img src property to an object module. In other words it does not render.
// import image
// const playImage = require ('./assets/play.png');

// For images in webpack you need to require them. You also need a
// const playButton = <img className="play-button" scr={playImage} onClick={play} />;


// When I import the image, it points the distribution html img src property to my local host and then the asset folder.
// import image
import playImage from './assets/play.png'

// For images in webpack you need to require them. You also need a
const playButton = <img className="play-button" scr={playImage} onClick={play} />;




const root = createRoot(document.getElementById('app'));
root.render(playButton);