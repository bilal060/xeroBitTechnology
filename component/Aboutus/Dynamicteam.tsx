import React from 'react'
import Image from 'next/image'
import aboutleftimage from "../../assets/images/aboutleft.png"
import aboutrightimage from "../../assets/images/aboutright.png"

function Dynamicteam() {
    return (
        <>
            <section className='dynamic-team pt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-sm-12'>
                            <h2>Were A Dynamic Team Of Software Developers.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.</p>
                            <ul className='about-items'>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <li>Enim adminim veniam, quis nostrud tation</li>
                                <div className="btn-center">
                                    <button type="button" className="btn_custome">Get Started Today</button>
                                </div>
                            </ul>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12'>
                            <div className='row dynamic-images'>
                                <div className='col-md-6 col-lg-6 col-sm-6 dynamic-image-left'>
                                    <Image src={aboutleftimage} alt="img" className='float-end img-fluid' />
                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-6 dynamic-image-right'>
                                    <Image src={aboutrightimage} alt="img" className='float-start img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dynamicteam
