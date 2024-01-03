import React from 'react'
import './Header.css'

import PhoneIcon from '@mui/icons-material/Phone';

import EmailIcon from '@mui/icons-material/Email';

import Language_dropdown from './Header_language_dropdown';

const InfoPanel = () => {

    return (
        <>
            <div className="Info_panel  pt-2 pb-2 text-white">
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <div className='phone_and_email d-flex'>
                            <div className='phone_icon d-flex'>
                                <div className='icon me-2'>
                                    <PhoneIcon />
                                </div>
                                <div className='text'>
                                    +993 12 234923
                                </div>
                            </div>
                            <div className='email_icon d-flex ms-3'>
                                <div className='icon me-2'>
                                    <EmailIcon />
                                </div>
                                <div className="text">
                                    asb@ashgabatairport.gov.tm
                                </div>
                            </div>
                        </div>
                        <div className="main-header-three__top-right">
                            <div className="main-header-three__social">
                                <a href="#" className='text-white'>Sorag-jogap gullugy</a>
                                <a> <Language_dropdown /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoPanel