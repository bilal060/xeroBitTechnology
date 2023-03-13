import React from 'react'
import Image from 'next/image'
import uxuiimage from "../../assets/images/uxuidesign.png"
import AnimatedButton from '../Animated-btn'

const Uxuidesign = () => {
    return (
        <>
            <section className='uxui-design pt-5'>
                <div className='container  g-0'>
                    <div className='row m-0'>
                        <div className='col-md-6 col-lg-5 mt-5 strategy-tabs text_center_justification'>
                            <h3 className='section-sub-heading font-36-46 text-black pb-4'> We&apos;re A Dynamic Team Of Software Developers.</h3>
                            <p className='font-16 font-weight-400 text-dark-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris.</p>
                            <ul className='about-items'>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                            </ul>
                            <div className="btn-center">
                                <AnimatedButton text="Get Started Today" />
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-7 g-0 image_right_container d-md-block d-none'>
                            <Image src={uxuiimage} alt="uxui-image" className='img-fluid float-end' />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Uxuidesign
