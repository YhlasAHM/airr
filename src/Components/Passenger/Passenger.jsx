import React, { useEffect } from 'react'
import './Passenger.css'


import plane_left from '../../assets/images/Frame_237.png'
import plane_right from '../../assets/images/Frame_238.png'

import { useDispatch, useSelector } from 'react-redux'

import { getPassengers } from '../../actions/passengers.action'

import { Link } from 'react-router-dom'
import { Translate } from '../Translate/Translate'


const Passenger = ({ visible }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPassengers())
    }, [])

    const passengers_s = useSelector(state => state.passengers)

    const passengers = passengers_s.passengers

    const { results } = passengers

    const handle_delete = (e) => {
        if (e.length > 10) {
            return e.substring(0, 10) + "..."
        } else {
            return e.substring(0, 10)
        }
    }

    return (
        <>
            {
                results ? <div className="Passenger" id="passenger">
                    <div className="container">
                        <h4 className='text-center pb-4 fw-bold'>
                            <div className="row d-flex justify-content-center">
                                <div className="col" style={{ position: 'relative' }}>
                                    <div className={`fly ${visible == 'passenger' ? 'active_img_one' : null}`}>
                                        <img src={plane_left} alt="" className='me-2' />
                                    </div>
                                </div>
                                <Translate title='passengers' />
                                <div className="col" style={{ position: 'relative' }}>
                                    <div className={`fly_two ${visible == 'passenger' ? 'active_img_two' : null}`}>
                                        <img src={plane_right} alt="" className='ms-2' />
                                    </div>
                                </div>
                            </div></h4>
                        <div class="benefits-one__right">
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                                {
                                    results.map(item => (
                                        <div className="col item" key={item.id}>
                                            <div class="benefits-one__single w-100 h-100">
                                                <div class="benefits-one__content">
                                                    <div class="benefits-one__icon">
                                                        <img src={`http://95.85.127.28:3008/${item.icon}`} alt="" />
                                                    </div>
                                                    <div class="benefits-one__title">
                                                        <h3><Link to={`/passengers/${item.id}`} style={{ textDecoration: 'none' }}>{item.title}</Link></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default Passenger