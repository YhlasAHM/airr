import React from 'react'


import plane_left from '../../assets/images/Frame_237.png'
import plane_right from '../../assets/images/Frame_238.png'


import left from '../../assets/images/Vector_one.png'

import img from '../../assets/images/brand/brand-1-1.png'

import right from '../../assets/images/Vector_two.png'



import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Partners = ({ visible }) => {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,

            }
        },
    };


    return (
        <>
            <div className="Partners mt-5 mb-5" id="partner">
                <div className="container">
                    <h4 className='text-center pb-4 fw-bold'>
                        <div className="row d-flex justify-content-center">
                            <div className="col" style={{ position: 'relative' }}>
                                <div className={`fly ${visible == 'partners' ? 'active_img_one' : null}`}>
                                    <img src={plane_left} alt="" className='me-2' />
                                </div>
                            </div>
                            HYZMATDASLARYMYZ
                            <div className="col" style={{ position: 'relative' }}>
                                <div className={`fly_two ${visible == 'partners' ? 'active_img_two' : null}`}>
                                    <img src={plane_right} alt="" className='ms-2' />
                                </div>
                            </div>
                        </div>
                    </h4>
                    <div className="container">
                        <OwlCarousel {...options}>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                                    <div class="item" key={item}>
                                        <div class="">
                                            <img src={img} alt="" />
                                        </div>
                                    </div>
                                ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners