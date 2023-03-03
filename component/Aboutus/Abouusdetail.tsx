import React from 'react'
import Image from 'next/image'
import aboutusdetails from "../../assets/images/Aboutusdetails.png"
function Abouusdetail() {
    return (
        <>
            <section className='aboutusdetails pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-sm-12'>
                            <Image src={aboutusdetails} alt="img" className='img-fluid mx-auto aboutus-detailimg' />
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12'>
                            <h2>Aliquam ultricies, arcu vel
                                varius consequat</h2>
                            <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam felis, mollis a varius sed, vulputate et orci. Donec lobortis ultrices tellus, vitae blandit ex molestie in. Mauris venenatis iaculis mauris ac hendrerit. Morbi convallis, neque ut pulvinar tempor, tellus diam bibendum enim, nec vehicula sem lacus eget nulla. Ut lacinia nisi dui, nec ornare augue scelerisque a. Nulla facilisi. Maecenas vel odio turpis. Nullam iaculis nunc quam, et lobortis tortor venenatis a. Pellentesque rhoncus lectus vitae est maximus suscipit. Maecenas sit amet nisi nec sapien pretium pellentesque et in ante. Aenean nisl velit, malesuada in mauris eget, pharetra commodo tellus.</p>
                            <div className="btn-center">
                                <button type="button" className="btn_custome">Get Started Today</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Abouusdetail
