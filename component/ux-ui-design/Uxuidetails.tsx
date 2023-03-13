import React from 'react'
import Image from 'next/image'
import uxuidetails from "../../assets/images/uxuidetails.png"
import AnimatedButton from '../Animated-btn'

const Uxuidetails = () => {
    return (
        <>
            <section className='uxuidetails pt-5 pb-5 position-relative'>
                <div className='container g-0'>
                    <div className='row m-0  flex-row-reverse'>
                        <div className='col-md-6 col-lg-6 col-sm-12 image_left_container p-0 d-md-block d-none'>
                            <Image src={uxuidetails} alt="uxuidetail-image" className='img-fluid' />
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 '>
                            <div className='text_center_justification'>
                                <h2 className='section-sub-heading font-36-46 text-black pb-4 m-0'>Aliquam ultricies, arcu vel
                                    varius consequat</h2>
                                <p className='font-16 font-weight-400 text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam felis, mollis a varius sed, vulputate et orci. Donec lobortis ultrices tellus, vitae blandit ex molestie in. Mauris venenatis iaculis mauris ac hendrerit. Morbi convallis, neque ut pulvinar tempor, tellus diam bibendum enim, nec vehicula sem lacus eget nulla. Ut lacinia nisi dui, nec ornare augue scelerisque a. Nulla facilisi. Maecenas vel odio turpis. Nullam iaculis nunc quam, et lobortis tortor venenatis a. Pellentesque rhoncus lectus vitae est maximus suscipit. Maecenas sit amet nisi nec sapien pretium pellentesque et in ante. Aenean nisl velit, malesuada in mauris eget, pharetra commodo tellus.</p>
                                <div className="btn-center">
                                    <AnimatedButton text='Get Started Today' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Uxuidetails
