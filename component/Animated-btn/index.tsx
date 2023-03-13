import Image from 'next/image';
import React from 'react'
import signalBar from '../../assets/images/signalBars.svg'
import signalBarBlack from '../../assets/images/signalBarBlack.svg'
import Link from 'next/link';


const AnimatedButton = (props: any) => {
    const { text, light,hrefto } = props;

    return (
        <Link href={`/${hrefto}`} className='animated-btn mt-5'>

            <button className="button button--shikoba button--round-s button--border-thin">
                <i className="button__icon icon icon-microphone"></i>
                <div className='bar-icon'>
                    {light ?
                        <Image src={signalBar} alt='' />
                        :
                        <Image src={signalBarBlack} alt='' />
                    }
                </div>
                <span className='btn_custome d-flex justify-content-center align-items-center'>{text}</span>
            </button>

        </Link>
    )
}

export default AnimatedButton