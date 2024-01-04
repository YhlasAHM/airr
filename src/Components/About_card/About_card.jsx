import React from 'react'

import './About_card.css'
import { Air_button } from '../Button/Air_button'


import plane from '../../assets/images/Group_1.png'
import { Translate } from '../Translate/Translate'

const About_card = (props) => {

    return (
        <>
            <div className='About_card d-flex'>
                <div className="w-100" style={{ order: `${props.one}` }}>
                    <img src={props.image} className='img-fluid w-100' alt="" style={{ width: `${props.width_}` }} />
                </div>
                <div className="w-100 ps-3 p-3" style={{ order: `${props.two}` }}>
                    <div className="d-flex h-100" style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <h4> <Translate title={props.title} /> </h4>
                        <div className='mb-3'> <Translate title={props.content} /></div>
                        {
                            props.button_ ?
                                <div><Air_button navigate_={props.navigate__} title="Ahlisini gorkez" img={plane} background_btn='#009000' color_btn='white' /></div> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_card