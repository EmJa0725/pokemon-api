import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './assets/fonts/Pokemon-Solid.ttf'


import "./index.css";

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
