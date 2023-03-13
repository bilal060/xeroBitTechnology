import React from 'react'
import Image from 'next/image'
import aboutusdetails from "../../assets/images/Aboutusdetails.png"
import AnimatedButton from '../Animated-btn'

function Aboutusdetail() {
    return (
        <>
            <section className='aboutusdetails pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-sm-12 d-flex align-items-center pb-3'>
                            <Image src={aboutusdetails} alt="aboutdetail-image" className='mx-auto img-fluid align-middle' />
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12'>
                            <h2 className='section-sub-heading font-36-46 text_center_justification pb-2'>Aliquam ultricies, arcu vel
                                varius consequat</h2>
                            <p className='font-16 font-weight-400 text-dark-gray text_center_justification pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam felis, mollis a varius sed, vulputate et orci. Donec lobortis ultrices tellus, vitae blandit ex molestie in. Mauris venenatis iaculis mauris ac hendrerit. Morbi convallis, neque ut pulvinar tempor, tellus diam bibendum enim, nec vehicula sem lacus eget nulla. Ut lacinia nisi dui, nec ornare augue scelerisque a. Nulla facilisi. Maecenas vel odio turpis. Nullam iaculis nunc quam, et lobortis tortor venenatis a. Pellentesque rhoncus lectus vitae est maximus suscipit. Maecenas sit amet nisi nec sapien pretium pellentesque et in ante. Aenean nisl velit, malesuada in mauris eget, pharetra commodo tellus.</p>
                            <div className="btn-center">
                                <AnimatedButton text='Get Started Today' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutusdetail
