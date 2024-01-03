import React from 'react'

import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import { useTranslation } from 'react-i18next'
import i18next from "i18next";

const Language_dropdown = () => {

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
            <Dropdown
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
            </Dropdown>
        </>
    )
}

export default Language_dropdown