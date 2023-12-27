import React from 'react'
import './Header.css'

import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import PhoneIcon from '@mui/icons-material/Phone';

import EmailIcon from '@mui/icons-material/Email';

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];


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
                                <a href="#">  <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a className='text-white' onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Turkmen
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