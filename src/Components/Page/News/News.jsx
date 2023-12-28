import React, { useEffect } from 'react'
import './News.css'

import DateRangeIcon from '@mui/icons-material/DateRange';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../../actions/news.action';

const News = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
    }, [])

    const navigate = useNavigate()

    const news_s = useSelector(state => state?.news)

    const { news } = news_s
    const { results } = news

    const handle_delete = (e) => {
        return e.substring(0, 100)
    }

    return (
        <>
            <section class="news-page">
                <div class="container">
                    <div class="section-title text-center">
                        <h1 class="fw-bold">TAZELIKLER</h1>
                    </div>
                    <div class="row">
                        {results ? results.map((item) => (
                            <div key={item.id} class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms" onClick={() => navigate(`/news/${item}`)}>
                                <div class="blog-one__single">
                                    <div class="blog-one__img">
                                        <img src={item.thumbnail} alt="" />
                                    </div>
                                    <div class="blog-one__content">
                                        <ul class="blog-one__meta list-unstyled">
                                            <li>
                                                <a style={{ textDecoration: 'none' }} href="news-details.html"><div className='d-flex' style={{ alignContent: 'center', justifyContent: 'center' }}> <DateRangeIcon /> <p className='ms-2'>Wed. 08 Nov. 2023</p></div></a>
                                            </li>
                                        </ul>
                                        <h5><a href="news-details.html" style={{ textDecoration: 'none', color: 'black' }}>{handle_delete(item.content)}</a></h5>
                                    </div>
                                </div>
                            </div>
                        ))
                            : <div> Loading !!!</div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default News