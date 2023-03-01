import React from 'react'
import Image from 'next/image'
import Chooseusimage from '../assets/images/Choseus.png'
import Choosusicon1 from '../assets/images/choosusicon1.svg'
import Choosusicon2 from '../assets/images/chooseusicon2.svg'
const Choseus = () => {
    return (
        <>
            <section className="choosus">
                <div className="choose-us container-fluid row align-items-center g-0">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center choosus-img">
                        <Image src={Choosusicon1} alt="icon1" className='choosus-icon-plan' />
                        <Image src={Chooseusimage} alt="chooseus image" />
                        <Image src={Choosusicon2} alt="icon2" className='choosus-icon-setting' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h5>Why choose us</h5>
                        <h2>Software Development Company that helps you succeed.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum . In accumsan sapien eu egestas ultricies.</p>
                        <div className='choose-btn mt-5'>
                            <button type="button" className="btn_custome">Get Started Today</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choseus
