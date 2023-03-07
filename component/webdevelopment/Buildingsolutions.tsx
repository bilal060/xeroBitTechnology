import React from 'react'
import Image from 'next/image'
import mobileicon from "../../assets/images/mobile icon.svg"
import nativicon from "../../assets/images/nativ icon.svg"
import portaldashboard from "../../assets/images/portaldashboard.svg"
import ecommerce from "../../assets/images/ecommerce.svg"
import bespoke from "../../assets/images/Bespok.svg"
import saas from "../../assets/images/sass.svg"
import opensource from "../../assets/images/opensourse.svg"
import Progressiveapps from "../../assets/images/progreciv.svg"

const Buildingsolutions = () => {
    return (
        <>
            <section className='building-solutions'>
                <div className='container'>
                    <h1>D</h1>
                    <p>P</p>
                    <div className='row'>
                        <div className='col-md-3 col-lg-3 col-sm-6'>
                            <Image src={nativicon} alt="img" className='img-fluid mx-auto' />
                            <h4>Custom-Built Web Apps</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6'>
                            <Image src={mobileicon} alt="img" className='img-fluid mx-auto' />
                            <h4>Customised Mobile Apps</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6'>
                            <Image src={portaldashboard} alt="img" className='img-fluid mx-auto' />
                            <h4>Portals & Dashboards</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6'>
                            <Image src={ecommerce} alt="img" className='img-fluid mx-auto' />
                            <h4>E-Commerce Development</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6'>
                            <Image src={bespoke} alt="img" className='img-fluid mx-auto' />
                            <h4>Bespoke Websites</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6'>
                            <Image src={saas} alt="img" className='img-fluid mx-auto' />
                            <h4>SaaS-based Products</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6'>
                            <Image src={opensource} alt="img" className='img-fluid mx-auto' />
                            <h4>Open-Source Web Apps</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6'>
                            <Image src={Progressiveapps} alt="img" className='img-fluid mx-auto' />
                            <h4>Progressive Web Apps</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Buildingsolutions
