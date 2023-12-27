import React from 'react'
import './Air_about.css'

import { Air_button } from '../Button/Air_button'

import plane from '../../assets/images/Plane_23.png'


const Air_about = () => {

    return (
        <>
            <div class="we_flyy pt-5 pb-5" id="air_about">
                <div class="container">
                    <div className="row">
                        <div class="col">
                            <div>
                                <h4 class="we-fly__title count-box"> ASGABAT HALKARA HOWA </h4>
                                <h3 className='we-fly__title count-box'>MENZILI</h3>
                                <p class="we-fly__text">Bu hazirki zaman terminallary , birnace dilleri bilyan isgarler
                                    we yolagcylaryn rahatlylygy. Ol yurdun esasy howa menzili bolup , dunyanin in uly
                                    awiakompaniyalaryny ozunde birlesdiryan turkmen howa menzilidir. Ol Ginnesin rekordlar
                                    kitabyna girizildi we birnace halkara bayraklara mynasyp boldy.
                                </p>
                                <div>
                                    <Air_button title="Ginisleyin" img={plane} background_btn='white' color_btn='#009000' />
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