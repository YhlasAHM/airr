import React from 'react'
import './Video.css'

const Video = () => {

    return (
        <>
            <div className="video" id="galereya">
                <div className="video-one">
                    <div className="video-one__bg">
                    </div>
                    <div className="container">
                        <div className="video-one__inner">
                            <div className="video-one__video-link">
                                <a href="#" className="video-popup">
                                    <div className="video-one__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video 