import React, { useEffect } from 'react'
import './News_detail.css'

import img_one from '../../../assets/images/blog/lp-1-1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getNew } from '../../../actions/new.action';
import { useParams } from 'react-router'


/* "install": "npm i --save --force", */

const News_detail = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNew(id))
    }, [])

    const new_ss = useSelector(state => state.new)

    const newsss = new_ss.new

    const { data } = newsss

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
                                            <p class="news-details__text-1">
                                                {data.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-5">
                                    <div class="sidebar">
                                        <div class="sidebar__single sidebar__post">
                                            <h3 class="sidebar__title">Latest posts</h3>
                                            <ul class="sidebar__post-list list-unstyled">
                                                <li>
                                                    <div class="sidebar__post-image">
                                                        <img src={img_one} alt="" />
                                                    </div>
                                                    <div class="sidebar__post-content">
                                                        <h3>
                                                            <span class="sidebar__post-content-meta"><i
                                                                class="fas fa-user-circle"></i>Admin</span>
                                                            <a href="news-details.html">Flight's precautionary landing in dubai</a>
                                                        </h3>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="sidebar__post-image">
                                                        <img src={img_one} alt="" />
                                                    </div>
                                                    <div class="sidebar__post-content">
                                                        <h3>
                                                            <span class="sidebar__post-content-meta"><i
                                                                class="fas fa-user-circle"></i>Admin</span>
                                                            <a href="news-details.html">There are many variations of</a>
                                                        </h3>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="sidebar__post-image">
                                                        <img src={img_one} alt="" />
                                                    </div>
                                                    <div class="sidebar__post-content">
                                                        <h3>
                                                            <span class="sidebar__post-content-meta"><i
                                                                class="fas fa-user-circle"></i>Admin</span>
                                                            <a href="news-details.html">Bring to the table win-win survival</a>
                                                        </h3>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
        </>
    )
}

export default News_detail