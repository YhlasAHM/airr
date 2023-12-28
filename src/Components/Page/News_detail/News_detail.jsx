import React, { useEffect } from 'react'
import './News_detail.css'

import image from '../../../assets/images/blog/news-details-img-1.jpg'

import img_one from '../../../assets/images/blog/lp-1-1.jpg'
import { useDispatch } from 'react-redux'

const News_detail = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNew())
    }, [])


    return (
        <div class="news-details">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-7">
                        <div class="news-details__left">
                            <h3 class="news-details__title mb-4">Few reason’s people choose to fly private jet charter
                            </h3>
                            <div class="news-details__img">
                                <img src={image} alt="" />
                                <div class="news-details__date">
                                    <p>18 July, 2022</p>
                                </div>
                            </div>
                            <div class="news-details__content">
                                <p class="news-details__text-1">There are many variations of passages of Lorem Ipsum
                                    available, but majority have suffered alteration in some form, by injected humour,
                                    or randomised words which don't look even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum. There are many variations of passages of Lorem Ipsum
                                    available, but majority have suffered alteration in some form, by injected humour,
                                    or randomised words which don't look even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum. Suspendisse ultricies vestibulum vehicula. Proin
                                    laoreet porttitor lacus. Duis auctor vel ex eu elementum. Fusce eu volutpat felis.
                                    Proin sed eros tincidunt, sagittis sapien eu, porta diam. Aenean finibus scelerisque
                                    nulla non facilisis. Fusce vel orci sed quam gravida condimentum. Aliquam
                                    condimentum, massa vel mollis volutpat, erat sem pharetra quam, ac mattis arcu elit
                                    non massa. Nam mollis nunc velit, vel varius arcu fringilla tristique. Cras elit
                                    nunc, sagittis eu bibendum eu, ultrices placerat sem. Praesent vitae metus dolor.
                                    Nulla a erat et orci mattis auctor.</p>
                                <p class="news-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
                                    amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
                                    nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
                                    interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                                    pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
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
        </div>
    )
}

export default News_detail