import React from 'react'
import './Header.css'

import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import PhoneIcon from '@mui/icons-material/Phone';

import EmailIcon from '@mui/icons-material/Email';

import { useTranslation } from 'react-i18next'
import i18next from "i18next";

const InfoPanel = () => {
    const { t, i18n } = useTranslation()

    const items = [
        {
            label: <a onClick={() => {
                i18n.changeLanguage('ru')
            }} className={`${i18next.language === 'ru' ? 'fw-bold' : ' '}`}>Russian</a>,
            key: '1',
        },
        {
            label: <a onClick={() => {
                i18n.changeLanguage('tk')
            }} className={`${i18next.language === 'tk' ? 'fw-bold' : ' '}`}>Turkmen</a>,
            key: '2',
        },
        {
            label: <a onClick={() => {
                i18n.changeLanguage('en')
            }} className={`${i18next.language === 'en' ? 'fw-bold' : ' '}`}>English</a>,
            key: '3',
        },
    ];


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
                                <a href="#">  <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a className='text-white' onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            {i18next.language === 'tk' ? 'Turkmen' : i18next.language === 'ru' ? 'Russian' : i18next.language === 'en' ? 'English' : 'Turkmen'}
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoPanel