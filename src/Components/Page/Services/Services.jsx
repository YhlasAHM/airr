import React, { useEffect } from 'react'
import './Services.css'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../../actions/services.action';

import { Link } from 'react-router-dom'

import { Translate } from '../../Translate/Translate'


const Services = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getServices())
    }, [])

    const services_s = useSelector(state => state.services)

    const { services } = services_s

    const { results } = services


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
            <section class="services-page">
                <div class="container">
                    <div class="section-title text-center">
                        <h1 className='fw-bold'> <Translate title='services' /> </h1>
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
                                            <h4 class="services-one__title"><Link to={`${item.id}`} style={{ textDecoration: 'none' }}>{handle_delete_title(item.title)}</Link>
                                            </h4>
                                        </div>
                                        <p class="services-one__text">{handle_delete(item.description)} </p>
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