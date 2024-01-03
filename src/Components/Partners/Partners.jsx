import React, { useEffect } from 'react'


import plane_left from '../../assets/images/Frame_237.png'
import plane_right from '../../assets/images/Frame_238.png'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { useDispatch, useSelector } from 'react-redux'

import { getPartner_home } from '../../actions/partner_home.action'

const Partners = ({ visible }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartner_home())
    }, [])

    const home_partner_s = useSelector(state => state.partner_home)

    const { partner_home } = home_partner_s

    const { results } = partner_home


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
                items: 3,

            },
            1200: {
                items: 4,
            }
        },
    };


    return (
        <>
            {
                results ? <div className="Partners mt-5 mb-5" id="partner">
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
                                    results.map(item => (
                                        <div class="item" key={item.id}>
                                            <div class="img-fluid">
                                                <img src={`http://95.85.127.28:3008/${item.logo}`} className='img-fluid' alt="" style={{ height: '8rem' }} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div> : <div>Loading !!!</div>
            }
        </>
    )
}

export default Partners