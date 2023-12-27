import React from 'react'
import './Page.css'

const GalleryPage = () => {

    return (
        <>
            <section class="gallery-page">
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
                </div>
            </section>
        </>
    )
}

export default GalleryPage