import React, { useState } from 'react'
import './Video.css'

import { Modal } from 'antd';

import video_ from '../../assets/images/vf.mp4'

const Video = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="video" id="galereya">
                <div className="video-one">
                    <div className="video-one__bg">
                    </div>
                    <div className="container">
                        <div className="video-one__inner">
                            <div className="video-one__video-link">
                                <button onClick={showModal}>
                                    <div className="video-one__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className='modalll' title="Video" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div class="wow fadeInUp" data-wow-delay="100ms">
                    <div class="gallery-page__single">
                        <div>
                            <video width={'100%'} controls >
                                <source src={video_} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Video 