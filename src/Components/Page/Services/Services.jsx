import React, { useEffect } from 'react'
import './Services.css'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../../actions/services.action';

import { Link } from 'react-router-dom'

const Services = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getServices())
    }, [])

    const services_s = useSelector(state => state.services)

    const { services } = services_s

    const { results } = services
    console.log('services::::::::', results)

    return (
        <>
            <section class="services-page">
                <div class="container">
                    <div class="section-title text-center">
                        <h1 className='fw-bold'>HYZMATLARYMYZ</h1>
                    </div>
                    <div class="row">
                        {results ? results.map(item => (
                            <div key={item.id} class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div class="services-one__single">
                                    <div class="services-one__img">
                                        <img src={`http://95.85.127.28:3008/${item.image}`} alt="" />
                                    </div>
                                    <div class="services-one__content">
                                        <div class="services-one__title-box">
                                            <h4 class="services-one__title"><Link to={`${item.id}`} style={{ textDecoration: 'none' }}>KARGO TERMINALY</Link>
                                            </h4>
                                        </div>
                                        <p class="services-one__text">Asgabadyn halkara howa menzilinin caginde yerlesyan yuk terminaly su gunki
                                            gunde sebit boyunca gury yerde gurlan in dowrebap desgalaryn biridir. </p>
                                        <div class="services-one__arrow">
                                            <Link to={`${item.id}`} style={{ textDecoration: 'none' }}><i class="fas fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                            : <div>Loading !!!</div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services