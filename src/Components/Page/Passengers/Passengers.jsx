import React, { useEffect } from 'react'
import './Passengers.css'
import { useDispatch, useSelector } from 'react-redux'

import { getPassengers } from '../../../actions/passengers.action'

import { Link } from 'react-router-dom'

const Passengers = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPassengers())
    }, [])

    const passengers_s = useSelector(state => state.passengers)

    const passengers = passengers_s.passengers

    const { results } = passengers


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

    console.log('partners::: ', results)

    return (
        <>
            {
                results ? <div class="services-page">
                    <div class="container">
                        <div class="section-title text-center">
                            <h1 class="fw-bold">YOLAGCYLAR <br /> UCIN</h1>
                        </div>
                        <div class="row">
                            {
                                results.map(item => (
                                    <div key={item.id} class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div class="services-one__single">
                                            <div class="services-one__img">
                                                <img src={`http://95.85.127.28:3008/${item.icon}`} alt="" />
                                            </div>
                                            <div class="services-one__content">
                                                <div class="services-one__title-box">
                                                    <h4 class="services-one__title"><Link to={`${item.id}`} style={{ textDecoration: 'none' }}>{handle_delete_title(item.title)}</Link>
                                                    </h4>
                                                </div>
                                                <p class="services-one__text"> </p>
                                                <div class="services-one__arrow">
                                                    <Link to={`${item.id}`} style={{ textDecoration: 'none' }}><i class="fas fa-angle-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div> : <div>Loading !!!!</div>
            }
        </>
    )
}

export default Passengers