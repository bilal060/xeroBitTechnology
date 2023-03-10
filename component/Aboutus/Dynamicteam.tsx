import React from 'react'
import Image from 'next/image'
import aboutimage from "../../assets/images/abouthome.svg"
import AnimatedButton from '../Animated-btn'

function Dynamicteam() {
    return (
        <>
            <section className='dynamic-team pt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-sm-12 content-center'>
                            <h2 className='section-sub-heading font-36-46 text_center_justification pb-2'>Were A Dynamic Team Of Software Developers.</h2>
                            <p className='font-16 font-weight-400 text-dark-gray text_center_justification pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.</p>
                            <ul className='about-items'>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <div className="btn-center">
                                    <AnimatedButton text='Get Started Today' />
                                </div>
                            </ul>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 d-flex align-items-center pb-2 d-md-block d-none'>
                            <Image src={aboutimage} alt="img" className='ms-auto img-fluid align-middle' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dynamicteam
