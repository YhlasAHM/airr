import React, { useEffect } from 'react'
import './Business_detail.css'

import img_one from '../../../assets/images/blog/lp-1-1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getPartner } from '../../../actions/partner.action';
import { useParams } from 'react-router'

const Business_detail = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPartner(id))
    }, [])

    const new_ss = useSelector(state => state.partner)

    const partner = new_ss.partner

    const { data } = partner

    return (
        <>
            {
                data ? <div class="news-details" >
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="news-details__left">
                                    <h3 class="news-details__title mb-4">{data.title}
                                    </h3>
                                    <div class="news-details__img">
                                        <img src={`http://95.85.127.28:3008/${data.image}`} alt="" />
                                        <div class="news-details__date">
                                            <div>18 July, 2022</div>
                                        </div>
                                    </div>
                                    <div class="news-details__content">
                                        <p class="news-details__text-1" dangerouslySetInnerHTML={{ __html: data.description }}>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div > : <div>Loading !!!</div>
            }
        </>
    )
}

export default Business_detail