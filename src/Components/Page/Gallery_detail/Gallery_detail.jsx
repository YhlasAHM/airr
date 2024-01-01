import React, { useEffect } from 'react'
import './Gallery_detail.css'
import { useDispatch, useSelector } from 'react-redux'
import { getGallery } from '../../../actions/gallery.action'
import { getVideo } from '../../../actions/getVideos.action'
import { useParams } from 'react-router'

const Gallery_detail = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGallery(id))
        dispatch(getVideo(id))
    }, [])

    const gallery = useSelector(state => state.gallery?.gallery_?.data?.images)

    const video = useSelector(state => state.video.video_?.data?.videos)

    console.log('videoo:::::::::', video)

    console.log(gallery)


    return (
        <>
            {
                gallery ? <div class="gallery-page">
                    <div class="container">
                        <div class="row">
                            {
                                gallery.map(item => (
                                    <div key={item.id} class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div class="gallery-page__single">
                                            <div class="gallery-page__img">
                                                <img src={`http://95.85.127.28:3008/${item.src}`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div> : <div>Loading !!!</div>
            }
            <div className='container'>
                {
                    video.map(item => (
                        <div key={item.id} class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div class="gallery-page__single">
                                <div>
                                    <video width={'100%'} controls >
                                        <source src={`http://95.85.127.28:3008/${item.src}`} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Gallery_detail