import React, { useEffect, useState } from 'react'
import './Page.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGallery } from '../../../actions/all_gallery.action'
import { useNavigate } from 'react-router'

const Gallery_detail = () => {

    /*     const navigate = useNavigate()
    
        const dispatch = useDispatch()
    
        useEffect(() => {
            dispatch(getAllGallery())
        }, [])
    
        const gallery = useSelector(state => state.allgallery)
    
        const { allgallery_ } = gallery
    
        const { results } = allgallery_
    
        console.log('gallery:::::', results)
     */

    return (
        <>
            {
                results ? <div class="gallery-page">
                    <div class="container">
                        <div class="row">
                            {
                                results.map(item => (
                                    <div key={item.data.id} class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div class="gallery-page__single">
                                            <div class="gallery-page__img">
                                                <img src={`http://95.85.127.28:3008/${item.data.cover_image}`} alt="" />
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

export default Gallery_detail