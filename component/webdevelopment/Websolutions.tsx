import React from 'react'
import Image from 'next/image'
import solutionimg from "../../assets/images/strategy.png"
import AnimatedButton from '../Animated-btn'
const Websolutions = () => {
    return (
        <>
            <section className='web-solutions img-right-contianer-out pt-5 pb-3 mt-2 font-family-primary'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6'>
                            <h6 className='section-first-heading font-weight-500 font-18-17 text-xero-primary text_center_justification pt-2'>You Think, We Code</h6>
                            <h2 className='section-sub-heading font-weight-700 font-36-46 mt-2 text_center_justification pt-2'>Productive & engaging web solutions for your business</h2>
                            <p className='font-16 font-weight-400 text-dark-gray text_center_justification pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris.</p>
                            <div className="btn-center">
                                <AnimatedButton text='Get Started Today' />
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 g-0 image_right_container display_none_767'>
                            <Image src={solutionimg} alt="websolutionimage" className='img-fluid float-end' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Websolutions
