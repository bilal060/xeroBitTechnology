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
                            <h2 className='section-sub-heading font-36-46 text_center_justification pb-2'>Our Mission And Vision </h2>
                            <p className='font-16 font-weight-400 text-dark-gray text_center_justification pt-3'>At Xero Bit Technology, our mission is to transform the digital landscape through innovative solutions that empower businesses to thrive in the modern world. We are committed to delivering high-quality, customized services that drive growth, improve user experiences, and create lasting value for our clients.</p>
                            <p className='font-16 font-weight-400 text-dark-gray text_center_justification'>Our vision is to be a trusted partner for businesses seeking to harness the full potential of technology. We aim to become a leading provider of digital services that enable organizations to achieve their goals with speed, efficiency, and agility. By staying ahead of the curve and embracing emerging trends, we strive to make a positive impact on the world and contribute to a better future for all.</p>
                            <div className="btn-center">
                                <AnimatedButton light={true} text='Get Started Today' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutusdetail
