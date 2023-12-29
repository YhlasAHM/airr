import React, { useEffect, useState } from 'react'
import './Page.css'
import { useDispatch, useSelector } from 'react-redux'
import { getGallery } from '../../../actions/gallery.action'

const GalleryPage = () => {

    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGallery(page))
    }, [page])

    const gallery = useSelector(state => state.gallery)
    console.log('gallery:::::', gallery)

    return (
        <>
            <div class="gallery-page">
                <div class="container">
                    <div class="section-title text-center">
                        <h1 class="fw-bold">SURATLAR</h1>
                    </div>
                    <div class="row">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                                <div key={item} class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div class="gallery-page__single">
                                        <div class="gallery-page__img">
                                            <img src="assets/images/gallery/gallery-page-1.jpg" alt="" />
                                            <div class="gallery-page__icon">
                                                <a class="img-popup" href="assets/images/gallery/gallery-page-1.jpg"><span
                                                    class="fa fa-plus"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='text-center'>
                        <button type='button' onClick={() => setPage(page + 1)}> Yenede </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryPage