import React, { useEffect } from 'react'
import './Business.css'

import plane_left from '../../assets/images/Frame_237.png'
import plane_right from '../../assets/images/Frame_238.png'

import { useDispatch, useSelector } from 'react-redux'

import { getPartners } from '../../actions/partners.action'

import { Link } from 'react-router-dom'
import { Translate } from '../Translate/Translate'

const Business = ({ visible }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartners())
    }, [])

    const partners_s = useSelector(state => state.partners)

    const { partners } = partners_s
    const { results } = partners

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
                results ? <div className='Business' id="business">
                    <div className="container">
                        <div class="section-title text-center">
                            <h4 className='text-center fw-bold'>
                                <div className="row d-flex justify-content-center">
                                    <div className="col" style={{ position: 'relative' }}>
                                        <div className={`fly ${visible == 'business' ? 'active_img_one' : null}`}>
                                            <img src={plane_left} alt="" className='me-2' />
                                        </div>
                                    </div>
                                    <Translate title='business' />
                                    <div className="col" style={{ position: 'relative' }}>
                                        <div className={`fly_two ${visible == 'business' ? 'active_img_two' : null}`}>
                                            <img src={plane_right} alt="" className='ms-2' />
                                        </div>
                                    </div>
                                </div></h4>
                        </div>
                        <div class="row">
                            {
                                results.map((item, index) => {
                                    if (index <= 3) {
                                        return (
                                            <div key={item.id} class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                                <div class="services-one__single">
                                                    <div class="services-one__img">
                                                        <img src={`http://95.85.127.28:3008/${item.image}`} alt="" />
                                                    </div>
                                                    <div class="services-one__content">
                                                        <div class="services-one__title-box">
                                                            <h4 class="services-one__title"><Link to={`/business/${item.id}`} style={{ textDecoration: 'none' }}>{handle_delete_title(item.title)}</Link>
                                                            </h4>
                                                        </div>
                                                        <p class="services-one__text">{handle_delete(item.description)} </p>
                                                        <div class="services-one__arrow">
                                                            <Link to={`/business/${item.id}`} style={{ textDecoration: 'none' }}><i class="fas fa-angle-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default Business