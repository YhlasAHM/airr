import React, { useEffect } from 'react'
import './Services_detail.css'

import { useDispatch, useSelector } from 'react-redux'
import { getService } from '../../../actions/service.action';
import { useParams } from 'react-router'

const Services_detail = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getService(id))
    }, [])

    const service_s = useSelector(state => state.service)

    const { service } = service_s

    const { data } = service

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
                                        <img src={`http://95.85.127.28:3008/${data.image}`} alt="" />
                                        <div class="news-details__date">
                                            <p>18 July, 2022</p>
                                        </div>
                                    </div>
                                    <div class="news-details__content">
                                        <p class="news-details__text-1">
                                            {data.description}
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

export default Services_detail