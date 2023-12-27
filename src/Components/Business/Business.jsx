import React from 'react'
import './Business.css'

import plane_left from '../../assets/images/Frame_237.png'
import plane_right from '../../assets/images/Frame_238.png'


const Business = ({ visible }) => {
    return (
        <>
            <div className='Business mb-5' id="business">
                <div className="container">
                    <div class="services-one">
                        <div class="section-title text-center">
                            <h4 className='text-center pb-4 fw-bold'>
                                <div className="row d-flex justify-content-center">
                                    <div className="col" style={{ position: 'relative' }}>
                                        <div className={`fly ${visible == 'business' ? 'active_img_one' : null}`}>
                                            <img src={plane_left} alt="" className='me-2' />
                                        </div>
                                    </div>
                                    ISEWURLER
                                    <div className="col" style={{ position: 'relative' }}>
                                        <div className={`fly_two ${visible == 'business' ? 'active_img_two' : null}`}>
                                            <img src={plane_right} alt="" className='ms-2' />
                                        </div>
                                    </div>
                                </div></h4>
                        </div>
                        <div class="row">
                            {
                                [1, 2, 3, 4].map(item => (
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
                </div>
            </div>
        </>
    )
}

export default Business