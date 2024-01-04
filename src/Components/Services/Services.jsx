import React, { useEffect } from 'react'
import './Services.css'

import plane from '../../assets/images/Frame_plane_one.png'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import left from '../../assets/images/Vector_one.png'
import right from '../../assets/images/Vector_two.png'

import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../actions/services.action';

import { Link } from 'react-router-dom'
import { Translate } from '../Translate/Translate';

const Services = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getServices())
    }, [])

    const services_s = useSelector(state => state.services)

    const { services } = services_s

    const { results } = services

    const state = {
        responsive: {
            0: {
                items: 2,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
        navText: [`<img src=${left} alt="" />   `, `<img src=${right} alt="" />`]
    }

    const handle_delete = (e) => {
        if (e.length > 100) {
            return e.substring(0, 100) + "..."
        } else {
            return e.substring(0, 100)
        }
    }

    const handle_delete_title = (e) => {
        if (e.length > 10) {
            return e.substring(0, 10) + "..."
        } else {
            return e.substring(0, 10)
        }
    }


    return (
        <>
            {
                results ? <div class="price-one" id="services">
                    <div class="container">
                        <div class="row" style={{ position: 'relative' }}>
                            <div class="col-xl-4">
                                <div class="price-one__left">
                                    <div class="section-title text-left">
                                        <h3 class="fw-bold"> <Translate title='seven_section_services' /> <br /> <img src={plane} alt="" /></h3>
                                    </div>
                                    <p class="price-one__text"> <Translate title='seven_section_text' />  </p>
                                </div>
                            </div>
                            <div class="col-xl-8">
                                <OwlCarousel
                                    autoplay
                                    autoplayTimeout={2000}
                                    autoplayHoverPause={true}
                                    loop
                                    navText={state.navText}
                                    items={3}
                                    className="owl-theme"
                                    nav
                                    margin={8} >
                                    {
                                        results.map(item => (
                                            <div class="item" key={item.id}>
                                                <div class="blog-one__single">
                                                    <div class="blog-one__img">
                                                        <img src={`http://95.85.127.28:3008/${item.image}`} alt="" />
                                                        <Link to={`/services/${item.id}`} className='text-white' style={{ textDecoration: 'none' }}>
                                                            <h4>{handle_delete_title(item.title)}</h4>
                                                            <div className='text'> {handle_delete(item.description)}</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div > : null
            }
        </>
    )
}

export default Services