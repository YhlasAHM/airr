import React, { useEffect, useState } from 'react'
import './App.css';

/* 
import { Routes, Route } from "react-router-dom";
 */
/* import 'antd/dist/antd.css';
import 'antd/dist/antd.js';
import 'antd/dist/antd.min.css'

import 'antd/dist/antd.variable.min.css';

 */
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

    <div className='App'>
      <div>
        {
          top && <div className='back_top' onClick={back_Top}> top </div>
        }
      </div>

      Brendyoly
    </div>
  )
}

export default App;
