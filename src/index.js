import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom'

import logo from './assets/images/AHHM-Preloader.gif'

const Loading = () => {
  return (
    <div className='loading v_100'>
      <div>
        <img src={logo} alt='' />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('__react'));

root.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
