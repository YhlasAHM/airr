import React from 'react'
import './Header.css'

import Marquee from "react-fast-marquee";

const Header_new_slider = () => {

    return (
        <>
            <div className='Header_new_slider mb-2 pt-2'>
                <Marquee pauseOnHover={true} speed={100}>
                    <ul className='slider'>
                        <li>
                            <a href="#">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ex?
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ex?
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ex?
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ex?
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ex?
                            </a>
                        </li>
                    </ul>
                </Marquee>
            </div>
        </>
    )
};

export default Header_new_slider