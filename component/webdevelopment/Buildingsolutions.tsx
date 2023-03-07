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
                <div className='container pt-5 pb-5'>
                    <h1 className='pt-3 pb-3'>Building solutions that solve complex business problems</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    <div className='row mt-2 mb-2'>
                        <div className='col-md-3 col-lg-3 col-sm-6 mt-5'>
                            <Image src={nativicon} alt="img" className='img-fluid mx-auto' />
                            <h4>Custom-Built <br /> Web Apps</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6 mt-5'>
                            <Image src={mobileicon} alt="img" className='img-fluid mx-auto' />
                            <h4>Customised <br />  Mobile Apps</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6 mt-5'>
                            <Image src={portaldashboard} alt="img" className='img-fluid mx-auto' />
                            <h4>Portals & <br /> Dashboards</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6 mt-5'>
                            <Image src={ecommerce} alt="img" className='img-fluid mx-auto' />
                            <h4>E-Commerce <br /> Development</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6 mt-5'>
                            <Image src={bespoke} alt="img" className='img-fluid mx-auto' />
                            <h4>Bespoke <br /> Websites</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6 mt-5'>
                            <Image src={saas} alt="img" className='img-fluid mx-auto' />
                            <h4>SaaS-based <br /> Products</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6 mt-5'>
                            <Image src={opensource} alt="img" className='img-fluid mx-auto' />
                            <h4>Open-Source <br /> Web Apps</h4>
                        </div>
                        <div className='col-md-3 col-lg-3 col-sm-6 mt-5'>
                            <Image src={Progressiveapps} alt="img" className='img-fluid mx-auto' />
                            <h4>Progressive <br /> Web Apps</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Buildingsolutions
