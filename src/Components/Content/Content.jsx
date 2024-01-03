import React from 'react'

import './Content.css'

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Content = (props) => {
    return (
        <>
            <div className='Content'>
                <h6>{props.title}</h6>
                {props.btn_one ? <div className='mb-1'> {props.icon_one == 'phone' ? < PhoneIcon /> : <EmailIcon />} <span>{props.icon_content_one}</span> </div> : null}
                {props.btn_two ? <div className='mb-1'> {props.icon_two == 'phone' ? < PhoneIcon /> : <EmailIcon />} <span>{props.icon_content_two}</span>  </div> : null}
                {props.btn_three ? <div className='mb-1'> {props.icon_three == 'phone' ? < PhoneIcon /> : <EmailIcon />} <span>{props.icon_content_three}</span>  </div> : null}
            </div >
        </>
    )
}

export default Content