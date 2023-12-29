import React, { useEffect, useState } from 'react'
import './App.css';

import { Routes, Route } from "react-router-dom";

import 'antd/dist/antd.css';
import 'antd/dist/antd.js';
import 'antd/dist/antd.min.css'

import 'antd/dist/antd.variable.min.css';

import { lazy } from 'react';

import Footer from './Components/Footer/Footer';

import Navbar from './Components/Header/Navbar';

import './assets/css/jetly-dark.css'
import './assets/css/jetly-responsive.css'
import './assets/css/jetly.css'

import NorthIcon from '@mui/icons-material/North';

const HomePage = lazy(() => import('./Components/Page/HomePage/Page'))

const GalleryPage = lazy(() => import('./Components/Page/GalleryPage/Page'))

const Contact = lazy(() => import('./Components/Page/Contact/Contact'))

const News = lazy(() => import('./Components/Page/News/News'))

const Services = lazy(() => import('./Components/Page/Services/Services'))

const Online_table = lazy(() => import('./Components/Online_table/Online_table'))

const Business = lazy(() => import('./Components/Page/Business/Business'))

const Passengers = lazy(() => import('./Components/Page/Passengers/Passengers'))

const Partners = lazy(() => import('./Components/Page/Partners/Partners'))

const About = lazy(() => import('./Components/Page/About/About'))

const News_detail = lazy(() => import('./Components/Page/News_detail/News_detail'))

const Services_detail = lazy(() => import('./Components/Page/Services_detail/Services_detail'))

const Passengers_detail = lazy(() => import('./Components/Page/Passengers_detail/Passenger_detail'))

const Partners_detail = lazy(() => import('./Components/Page/Partners_detail/Partners_detail'))


function App() {

  const [top, setTop] = useState(false)


  useEffect(() => {

    window.onscroll = () => {
      if (window.scrollY > 400) {
        setTop(true)
      } else {
        setTop(false)
      }
    }
  }, [])


  const back_Top = () => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className='App'>
        <Navbar />
        <div>
          <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path='news/:id' element={<News_detail />} />
            <Route path='services/:id' element={<Services_detail />} />
            <Route path='passengers/:id' element={<Passengers_detail />} />
            <Route path='partners/:id' element={<Partners_detail />} />
            <Route path='gallery' element={<GalleryPage />} />
            <Route path='contact' element={<Contact />} />
            <Route path='news' element={<News />} />
            <Route path='services' element={<Services />} />
            <Route path='online_table' element={<Online_table />} />
            <Route path='business' element={<Business />} />
            <Route path='passengers' element={<Passengers />} />
            <Route path='partners' element={<Partners />} />
            <Route path='about' element={<About />} />
          </Routes>
        </div>
        <Footer />
        {
          top && <div className='back_top' onClick={back_Top}><NorthIcon /> </div>
        }
      </div>
    </>
  );
}

export default App;