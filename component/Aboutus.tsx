import React from 'react'
import Image from 'next/image'
import aboutusimagegroup from '../assets/images/aboutus.svg'
import AnimatedButton from './Animated-btn'
const Aboutus = () => {
  return (
    <>
      <section className="aboutus pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-6 content-center">
              <h6 className='section-first-heading pt-2 pb-3'>About US</h6>
              <h2 className='font-36-46 section-sub-heading text_center_justification pb-2'>We&#39;re A Dynamic Team Of Software Developers.</h2>
              <p className='font-16 font-weight-400 text-dark-gray pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.</p>
              <ul className='about-items'>
                <li>Enim adminim veniam, quis nostrud tation</li>
                <li>Enim adminim veniam, quis nostrud tation</li>
                <li>Enim adminim veniam, quis nostrud tation</li>
                <div className="btn-center">
                  <AnimatedButton text='Get Started Today' />
                </div>
              </ul>
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
