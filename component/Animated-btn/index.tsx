import Image from 'next/image';
import React from 'react'
import signalBar from '../../assets/images/signalBars.svg'

const AnimatedButton = (props: any) => {
    const { text } = props;

    return (
        <div className='animated-btn mt-5'>

            <button className="button button--shikoba button--round-s button--border-thin">
                <i className="button__icon icon icon-microphone"></i>
                <div className='bar-icon'>
                    <Image src={signalBar} alt='' />
                </div>
                <span className='btn_custome d-flex justify-content-center align-items-center'>{text}</span>
            </button>

        </div>
    )
}

export default AnimatedButton