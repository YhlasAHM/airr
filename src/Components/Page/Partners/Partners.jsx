import React, { useEffect } from 'react'
import './Partners.css'
import { useDispatch, useSelector } from 'react-redux'

import { getPartners } from '../../../actions/partners.action'

import { Link } from 'react-router-dom'

const Partners = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartners())
    }, [])

    const partners_s = useSelector(state => state.partners)

    const { partners } = partners_s
    const { results } = partners

    console.log('partners::: ', results)

    return (
        <>
            {
                results ? <div class="services-page">
                    <div class="container">
                        <div class="section-title text-center">
                            <h1 class="fw-bold">HYZMATDASLAR</h1>
                        </div>
                        <div class="row">
                            {
                                results.map(item => (
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
                            }
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default Partners