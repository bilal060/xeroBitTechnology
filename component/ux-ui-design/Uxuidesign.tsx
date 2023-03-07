import React from 'react'
import Image from 'next/image'
import uxuiimage from "../../assets/images/uxuidesign.png"

const Uxuidesign = () => {
    return (
        <>
            <section className='uxui-design pt-5'>
                <div className='container-fluid row g-0'>
                    <div className='col-md-6 col-lg-5 mt-5 strategy-tabs'>
                        <h3 className='mt-2'> We&apos;re A Dynamic Team Of Software Developers.</h3>
                        <p className='pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris.</p>
                        <ul className='about-items'>
                            <li>Enim adminim veniam, quis nostrud tation</li>
                            <li>Enim adminim veniam, quis nostrud tation</li>
                            <li>Enim adminim veniam, quis nostrud tation</li>
                            <div className="btn-center">
                                <button type="button" className="btn_custome px-1">Get Started Today</button>
                            </div>
                        </ul>
                    </div>
                    <div className='col-md-6 col-lg-7 g-0 image_right_container'>
                        <Image src={uxuiimage} alt="image" className='img-fluid float-end' />
                    </div>
                </div>
            </section >
        </>
    )
}

export default Uxuidesign
