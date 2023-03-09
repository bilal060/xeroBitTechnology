import React from 'react'
import Image from 'next/image'
import Chooseusimage from '../assets/images/choseus.svg'
import AnimatedButton from './Animated-btn'
const Choseus = () => {
    return (
        <>
            <section className="choosus pt-5 pb-5 mt-2 mb-2">
                <div className="choose-us container-fluid row align-items-center g-0">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center choosus-img">
                        <Image src={Chooseusimage} alt="chooseus image" className='pt-4' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h6 className='font-weight-500 text_center_justification pb-3'>Why choose us</h6>
                        <h2 className='font-weight-700 text-85 text-100 text_center_justification'>Software Development Company that helps you succeed.</h2>
                        <p className='font-16 text-85 text-100 text_center_justification px-2 pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum . In accumsan sapien eu egestas ultricies.</p>
                        <div className="btn-center">
                            <AnimatedButton text='Get Started Today' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choseus
