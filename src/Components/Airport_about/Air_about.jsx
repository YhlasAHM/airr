import React from 'react'
import './Air_about.css'

import { Air_button } from '../Button/Air_button'

import plane from '../../assets/images/Plane_23.png'
import { Translate } from '../Translate/Translate'



const Air_about = () => {

    return (
        <>
            <div class="we_flyy" id="air_about">
                <div class="container">
                    <div className="row">
                        <div class="col">
                            <div>
                                <h4 class="we-fly__title count-box"><Translate title='Ashgabat_International_Airport' /> </h4>
                                <p class="we-fly__text"><Translate title='second_section_about' />
                                </p>
                                <div>
                                    <Air_button title="extension" img={plane} background_btn='white' color_btn='#009000' />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='rotate_image'>
                                <div className='img_one'>
                                    <img src="assets/images/shapes/we-fly-badge.png" alt="" class="we-fly__badge" />
                                </div>
                                <div className='img_two'>
                                    <img src="assets/images/shapes/we-fly-badge.png" alt="" class="we-fly__badge" />
                                </div>
                                <div className='img_three'>
                                    <img src="assets/images/shapes/we-fly-badge.png" alt="" class="we-fly__badge" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Air_about