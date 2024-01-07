import React, { useEffect } from 'react'
import './Header.css'

import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../actions/news.action';

import { Link } from 'react-router-dom'

import Marquee from "react-fast-marquee";

const Header_new_slider = () => {

    const dispatch = useDispatch()

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
            <div className='Header_new_slider pt-2'>
                <Marquee pauseOnHover={true} speed={100}>
                    <ul className='slider'>
                        {
                            results ?
                                results.map((item, index) => {
                                    if (index <= 4) {
                                        return (
                                            <li key={item.id}>
                                                <Link to={`news/${item.id}`}>
                                                    {handle_delete(item.title)}
                                                </Link>
                                            </li>
                                        )
                                    }
                                }) : <div>Loading !!!</div>
                        }
                    </ul>
                </Marquee>
            </div>
        </>
    )
};

export default Header_new_slider