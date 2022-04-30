// loads in the html file
require('file-loader?name=[name].[ext]!./index.html')
// Importing the React framework
import React from 'react';
// React v18 new root API: https://blog.saeloun.com/2021/07/15/react-18-adds-new-root-api.html
import { createRoot } from 'react-dom/client';
// importing the css file
import './main.css'
// Import from tone app
import { play } from './app.js'

const playButton = <button onClick={play}>PLAY</button>;




const root = createRoot(document.getElementById('app'));
root.render(playButton);