import React, { useEffect } from 'react'
import './News.css'

import plane_left from '../../assets/images/Frame_237.png'
import plane_right from '../../assets/images/Frame_238.png'

import { Air_button } from '../Button/Air_button'

import plane_one from '../../assets/images/Group_1.png'

import DateRangeIcon from '@mui/icons-material/DateRange';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../actions/news.action';

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router';

const News = ({ visible }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getNews())
    }, [])

    const news_s = useSelector(state => state?.news)

    const { news } = news_s
    const { results } = news

    const handle_delete = (e) => {
        return e.substring(0, 100)
    }


    return (
        <>
            {
                results ? <div className="News mb-5" id="news">
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
                                results.map((item, index) => {
                                    if (index <= 3) {
                                        return (
                                            <div key={item.id} class="col wow fadeInUp" data-wow-delay="500ms" onClick={() => navigate(`/news/${item.id}`)}>
                                                <div class="blog-one__single">
                                                    <div class="blog-one__img">
                                                        <img src={`http://95.85.127.28:3008/${item.image}`} alt="" />
                                                    </div>
                                                    <div class="blog-one__content">
                                                        <ul class="blog-one__meta list-unstyled">
                                                            <li>
                                                                <Link style={{ textDecoration: 'none' }} to={`${item.id}`}><div className='d-flex' style={{ alignContent: 'center', justifyContent: 'center' }}> <DateRangeIcon /> <p className='ms-2'>Wed. 08 Nov. 2023</p></div></Link>
                                                            </li>
                                                        </ul>
                                                        <h5><Link to={`${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>{handle_delete(item.content)}</Link></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Air_button navigate_='/news' title="Ahlisini gorkez" img={plane_one} background_btn='#009000' color_btn='white' />
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default News