import React from 'react'
import './Business.css'

const Business = () => {

    return (
        <>
            <section class="services-page">
                <div class="container">
                    <div class="section-title text-center">
                        <h2 class="section-title__title">ISEWURLER</h2>
                    </div>
                    <div class="row">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                                <div key={item} class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div class="services-one__single">
                                        <div class="services-one__img">
                                            <img src="assets/images/services/services-1-1.jpg" alt="" />
                                        </div>
                                        <div class="services-one__content">
                                            <div class="services-one__title-box">
                                                <h4 class="services-one__title"><a href="business-charter.html" style={{ textDecoration: 'none' }}>KARGO TERMINALY</a>
                                                </h4>
                                            </div>
                                            <p class="services-one__text">Asgabadyn halkara howa menzilinin caginde yerlesyan yuk terminaly su gunki
                                                gunde sebit boyunca gury yerde gurlan in dowrebap desgalaryn biridir. </p>
                                            <div class="services-one__arrow">
                                                <a href="business-charter.html" style={{ textDecoration: 'none' }}><i class="fas fa-angle-right"></i></a>
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

export default Business