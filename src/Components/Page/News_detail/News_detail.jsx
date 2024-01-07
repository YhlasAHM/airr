import React, { useEffect } from 'react'
import './News_detail.css'


import { useDispatch, useSelector } from 'react-redux'
import { getNew } from '../../../actions/new.action';
import { getNews } from '../../../actions/news.action';
import { useNavigate, useParams } from 'react-router'


/* "install": "npm i --save --force", */

const News_detail = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNew(id))
        dispatch(getNews())
    }, [])

    const new_ss = useSelector(state => state.new)

    const newsss = new_ss.new

    const { data } = newsss

    const news_s = useSelector(state => state?.news)

    const { news } = news_s
    const { results } = news


    const handle_delete = (e) => {
        return e.substring(0, 30) + '...'
    }

    const navigate = useNavigate()

    console.log(data)

    const handle_nav = (e) => {
        navigate(`/news/${e}`)
        window.location.reload()
    }

    return (
        <>
            {
                data ?
                    <div class="news-details">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-8 col-lg-7">
                                    <div class="news-details__left">
                                        <h3 class="news-details__title mb-4">{data.title}
                                        </h3>
                                        <div class="news-details__img">
                                            <img src={`http://95.85.127.28:3008/${data.image}`} alt="" />
                                            <div class="news-details__date">
                                                <p>18 July, 2022</p>
                                            </div>
                                        </div>
                                        <div class="news-details__content">
                                            <p class="news-details__text-1" dangerouslySetInnerHTML={{ __html: data.content }}>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-5">
                                    <div class="sidebar">
                                        <div class="sidebar__single sidebar__post">
                                            <h3 class="sidebar__title">Sonky Tazelikler</h3>
                                            <ul class="sidebar__post-list list-unstyled">
                                                {results ?
                                                    results.map((item, index) => {
                                                        if (index <= 2) {
                                                            return (
                                                                <li key={item.id} onClick={() => handle_nav(item.id)}>
                                                                    <div class="sidebar__post-image">
                                                                        <img src={`http://95.85.127.28:3008/${item.image}`} alt="" />
                                                                    </div>
                                                                    <div class="sidebar__post-content">
                                                                        <h3>
                                                                            <span class="sidebar__post-content-meta"><i
                                                                                class="fas fa-user-circle"></i>{item.updated_at}</span>
                                                                            <a dangerouslySetInnerHTML={{ __html: handle_delete(item.content) }}></a>
                                                                        </h3>
                                                                    </div>
                                                                </li>
                                                            )
                                                        }
                                                    })
                                                    : null
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <div>Loading !!!</div>
            }
        </>
    )
}

export default News_detail