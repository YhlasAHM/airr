import React from 'react'
import './News.css'


import DateRangeIcon from '@mui/icons-material/DateRange';
import { useNavigate } from 'react-router';

const News = () => {


    const navigate = useNavigate()


    return (
        <>
            <section class="news-page">
                <div class="container">
                    <div class="section-title text-center">
                        <h1 class="fw-bold">TAZELIKLER</h1>
                    </div>
                    <div class="row">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                                <div key={item} class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms" onClick={() => navigate(`/news/${item}`)}>
                                    <div class="blog-one__single">
                                        <div class="blog-one__img">
                                            <img src="assets/images/blog/news-1-5.jpg" alt="" />
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
                </div>
            </section>
        </>
    )
}

export default News