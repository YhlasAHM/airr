import React, { useEffect } from 'react'
import './Online_table.css'

import { Tabs } from 'antd';
import { Air_button } from '../Button/Air_button'

import plane_left from '../../assets/images/Frame_237.png'
import plane_right from '../../assets/images/Frame_238.png'

import InfoIcon from '@mui/icons-material/Info';

import plane from '../../assets/images/Group_1.png'

import image from '../../assets/images/Rectangle_39.png'
import { useDispatch, useSelector } from 'react-redux';

import { getArrival_flights } from '../../actions/arrival_flights.action'
import { getDeparture_flights } from '../../actions/departure_flights.action'
import { Translate } from '../Translate/Translate';

const Online_table = ({ visible }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArrival_flights())
        dispatch(getDeparture_flights())
    }, [])

    const arrival_flights = useSelector(state => state.arrival_flights)
    const departure_flights = useSelector(state => state.departure_flights)

    const items = [
        {
            key: '1',
            label: 'Вылет',
            children: <table class="table table-striped p-2">
                <tbody>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(item => (
                            <tr key={item}>
                                <td className='p-2'>02:45 20 дек</td>
                                <td className='p-2'>Стамбул</td>
                                <td className='p-2'> <img src={image} alt="" /> </td>
                                <td className='p-2'>TK 322 Turkish Airlines </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        },
        {
            key: '2',
            label: 'Прилет',
            children: <table class="table table-striped p-2">
                <tbody>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(item => (
                            <tr key={item}>
                                <td className='p-2'>09:50 20 дек</td>
                                <td className='p-2'>Туркменистан</td>
                                <td className='p-2'> <img src={image} alt="" /> </td>
                                <td className='p-2'>TK 10000 Russia Airlines </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        },
    ];


    return (
        <>
            <div className="container online_table" id='onlayn_table'>
                <h4 className='text-center pb-4 fw-bold'>
                    <div className="row d-flex justify-content-center">
                        <div className="col" style={{ position: 'relative' }}>
                            <div className={`fly ${visible == 'online_table' ? 'active_img_one' : null}`}>
                                <img src={plane_left} alt="" className='me-2' />
                            </div>
                        </div>
                        <Translate title='online_table' />
                        <div className="col" style={{ position: 'relative' }}>
                            <div className={`fly_two ${visible == 'online_table' ? 'active_img_two' : null}`}>
                                <img src={plane_right} alt="" className='ms-2' />
                            </div>
                        </div>
                    </div></h4>
                <div className='table_box'>
                    <div className='d-flex justify-content-between'>
                        <div className='fw-bold'>Airport Ashgabat, 22 noyabr</div>
                        <div className='d-flex'>
                            <InfoIcon />
                            <div className='ms-2'>Указано местное время</div>
                        </div>
                    </div>
                    <Tabs defaultActiveKey="1" items={items} />
                </div>
                <div className='d-flex justify-content-center pt-5'>
                    <Air_button navigate_='/online_table' title="show_all" img={plane} background_btn='#009000' color_btn='white' />
                </div>
            </div>
        </>
    )
}

export default Online_table