import React from 'react'
import './News.css'


import plane_left from '../../assets/images/Frame_237.png'
import plane_right from '../../assets/images/Frame_238.png'

import { Air_button } from '../Button/Air_button'

import plane_one from '../../assets/images/Group_1.png'

import DateRangeIcon from '@mui/icons-material/DateRange';

const News = ({ visible }) => {

    return (
        <>
            <div className="News mb-5" id="news">
                <div className="container">
                    <h4 className='text-center pb-4 fw-bold'>
                        <div className="row d-flex justify-content-center">
                            <div className="col" style={{ position: 'relative' }}>
                                <div className={`fly ${visible == 'news' ? 'active_img_one' : null}`}>
                                    <img src={plane_left} alt="" className='me-2' />
                                </div>
                            </div>
                            TAZELIKLER
                            <div className="col" style={{ position: 'relative' }}>
                                <div className={`fly_two ${visible == 'news' ? 'active_img_two' : null}`}>
                                    <img src={plane_right} alt="" className='ms-2' />
                                </div>
                            </div>
                        </div></h4>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        {
                            [1, 2, 3, 4].map(item => (
                                <div key={item} class="col wow fadeInUp" data-wow-delay="500ms">
                                    <div class="blog-one__single">
                                        <div class="blog-one__img">
                                            <img src="assets/images/blog/news-1-5.jpg" alt="" />
                                            <a href="news-details.html">
                                                <span class="blog-one__plus"></span>
                                            </a>
                                        </div>
                                        <div class="blog-one__content">
                                            <ul class="blog-one__meta list-unstyled">
                                                <li>
                                                    <a style={{ textDecoration: 'none' }} href="news-details.html"><div className='d-flex' style={{ alignContent: 'center', justifyContent: 'center' }}> <DateRangeIcon /> <p className='ms-2'>Wed. 08 Nov. 2023</p></div></a>
                                                </li>
                                            </ul>
                                            <h5><a href="news-details.html" style={{ textDecoration: 'none', color: 'black' }}>majority have suffered
                                                alteration in some form, by injected</a></h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Air_button title="Ahlisini gorkez" img={plane_one} background_btn='#009000' color_btn='white' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default News