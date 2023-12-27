import React from 'react'
import './Passenger.css'


import plane_left from '../../assets/images/Frame_237.png'
import plane_right from '../../assets/images/Frame_238.png'


const Passenger = ({ visible }) => {

    return (
        <>
            <div className="Passenger pt-5 pb-5" id="passenger">
                <div className="container">
                    <h4 className='text-center pb-4 fw-bold'>
                        <div className="row d-flex justify-content-center">
                            <div className="col" style={{ position: 'relative' }}>
                                <div className={`fly ${visible == 'passenger' ? 'active_img_one' : null}`}>
                                    <img src={plane_left} alt="" className='me-2' />
                                </div>
                            </div>
                            YOLAGCYLAR UCIN
                            <div className="col" style={{ position: 'relative' }}>
                                <div className={`fly_two ${visible == 'passenger' ? 'active_img_two' : null}`}>
                                    <img src={plane_right} alt="" className='ms-2' />
                                </div>
                            </div>
                        </div></h4>
                    <div class="benefits-one__right">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                                    <div className="col" key={item}>
                                        <div class="benefits-one__single">
                                            <div class="benefits-one__content">
                                                <div class="benefits-one__icon">
                                                    <span class="icon-travel-insurance-1"></span>
                                                </div>
                                                <div class="benefits-one__title">
                                                    <h3><a href="about.html" style={{ textDecoration: 'none' }}>Yolagcylaryn sahsy <br /> otagy</a></h3>
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

export default Passenger