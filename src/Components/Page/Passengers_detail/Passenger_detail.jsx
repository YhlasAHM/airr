import React, { useEffect } from 'react'
import './Passenger_detail.css'

import { useDispatch, useSelector } from 'react-redux'
import { getPassenger } from '../../../actions/passenger.action';
import { useParams } from 'react-router'

const Passengers_detail = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPassenger(id))
    }, [])


    const passenger_s = useSelector(state => state.passenger)

    const { passenger } = passenger_s
    const { data } = passenger

    return (
        <>
            {
                data ? <div class="news-details" >
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="news-details__left">
                                    <h3 class="news-details__title mb-4">
                                        {data.title}
                                    </h3>
                                    <div class="news-details__img">
                                        <img src={`http://95.85.127.28:3008/${data.icon}`} alt="" />
                                        <div class="news-details__date">
                                            <p>18 July, 2022</p>
                                        </div>
                                    </div>
                                    <div class="news-details__content">
                                        <p class="news-details__text-1">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div > : <div>Loading!!!</div>
            }
        </>
    )
}

export default Passengers_detail