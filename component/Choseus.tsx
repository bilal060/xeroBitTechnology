import React from 'react'
import Image from 'next/image'
import Choseusimage from '../assets/images/Choseus.png'
const Choseus = () => {
    return (
        <>
            <section className="chose-us mt-5 pt-5">
                <div className="container-fluid row">
                    <div className="col-md-6">
                        <Image src={Choseusimage} alt="choseus image" />
                    </div>
                    <div className="col-md-6">
                        <h5>Why choose us</h5>
                        <h2>Software Development Company that helps you succeed.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum . In accumsan sapien eu egestas ultricies.</p>
                        <button type="button" className="btn_custome">Get Started Today</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choseus
