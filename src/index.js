import './index.css';
import React from 'react';
import { render } from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';
import { registerLicense } from '@syncfusion/ej2-base';
import App from './App';

// Notes, we can NOT bundle react and just have a react CDN referenced here
// This can enable react to be cached so any MF that uses react will already
// have it cached. This only works for iframe / static website

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZjUX9WcXBRRGBZUkV2WA==');

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const root = document.getElementById("root")

render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  root
);