import React from 'react'
import Image from 'next/image'
import uxuidetails from "../../assets/images/uxuidetails.png"

const Uxuidetails = () => {
    return (
        <>
            <section className='uxuidetails pt-5 pb-5'>
                <div className='container-fluid row g-0'>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                        <Image src={uxuidetails} alt="img" className='img-fluid' />
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
            </section>
        </>
    )
}

export default Uxuidetails
