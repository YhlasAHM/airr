import React, { useEffect } from 'react'
import './News.css'

import DateRangeIcon from '@mui/icons-material/DateRange';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../../actions/news.action';

import { Link } from 'react-router-dom'

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
            <div class="news-page">
                <div class="container">
                    <div class="section-title text-center">
                        <h1 class="fw-bold">TAZELIKLER</h1>
                    </div>
                    <div class="row">
                        {results ? results.map((item) => (
                            <div key={item.id} class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms" onClick={() => navigate(`/news/${item.id}`)}>
                                <div class="blog-one__single">
                                    <div class="blog-one__img">
                                        <img src={`http://95.85.127.28:3008/${item.image}`} alt="" />
                                    </div>
                                    <div class="blog-one__content">
                                        <ul class="blog-one__meta list-unstyled">
                                            <li>
                                                <Link to={`news/${item.id}`} style={{ textDecoration: 'none' }} ><div className='d-flex' style={{ alignContent: 'center', justifyContent: 'center' }}> <DateRangeIcon /> <p className='ms-2'>Wed. 08 Nov. 2023</p></div></Link>
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
            </div>
        </>
    )
}

export default News