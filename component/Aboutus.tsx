import React from 'react'
import Image from 'next/image'
import aboutusimagegroup from '../assets/images/aboutus.svg'       
import ticker from '../assets/images/ticker.svg'
import AnimatedButton from './Animated-btn'
const Aboutus = () => {
  return (
    <>
      <section className="aboutus pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-6 content-center">
              <h6 className='px-2 section-first-heading pt-2 pb-3'>About US</h6>
              <h2 className='px-2 font-36-46 section-sub-heading text_center_justification pb-2'>Our Approach to Digital Solutions</h2>
              <p className='px-2 font-16 font-weight-400 text-dark-gray pt-3 pb-4'>At Xero Bit Technology, we believe in a client-centric approach to digital solutions. Our team of experts works closely with you to understand your unique business needs and develop a customized strategy that delivers superior results. From concept to launch, we stay with you every step of the way, ensuring that you are fully satisfied with the end product.</p>
              <ul className='p-0 font-family-primary' >
                <li className='font-16 d-flex align-items-center gap-16px'>
                  <Image src={ticker} alt='' />
                  <p className='font-weight-500 text-dark-gray'>We use the latest tools and technologies to deliver digital solutions that are fast, efficient, and responsive.</p>
                </li>
                <li className='font-16 d-flex align-items-center gap-16px'>
                  <Image src={ticker} alt='' />
                  <p className='font-weight-500 text-dark-gray'>Our solutions are designed to be scalable, ensuring that your business can grow and evolve without being held back by technological limitations.</p>
                </li>
                <li className='font-16 d-flex align-items-center gap-16px'>
                  <Image src={ticker} alt='' />
                  <p className='font-weight-500 text-dark-gray'>With our innovative digital solutions, you can stay ahead of the curve and remain competitive in today fast-paced digital landscape.</p>
                </li>
              </ul>

              <div className="btn-center  px-2">
                <AnimatedButton hrefto="contactus" light={true} text='Get Started Today' />
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-6">
              <Image src={aboutusimagegroup} alt="aoutus-image" className='img-fluid aboutus-img d-md-block d-none' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
