import React from 'react'
import './Air_button.css'

import { useNavigate } from 'react-router';

export const Air_button = ({ title, img, background_btn, color_btn, navigate_ }) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(`${navigate_}`)} type='button' className='d-flex text-center' style={{ background: `${background_btn}`, color: `${color_btn}` }}>
            <div className='image'>
                <img src={img} alt="" />
            </div>
            <div>
                {title}
            </div>
        </button>
    )
}