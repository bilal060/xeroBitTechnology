import React from 'react'
import Image from 'next/image'
import aboutusimage from '../assets/images/aboutus.png'
import ghraphimage from '../assets/images/ghraphimage.png'
const Aboutus = () => {
  return (
    <>
      <section className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 col-lg-6">
              <h6 className='font-weight-500'>About US</h6>
              <h2 className='font-weight-700'>We&#39;re A Dynamic Team Of Software Developers.</h2>
              <p className='font-16 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.</p>
              <ul className='about-items'>
                <li>Enim adminim veniam, quis nostrud tation</li>
                <li>Enim adminim veniam, quis nostrud tation</li>
                <li>Enim adminim veniam, quis nostrud tation</li>
                <div className="btn-center">
                  <button type="button" className="btn_custome">Get Started Today</button>
                </div>
              </ul>
            </div>
            <div className="col-sm-4 col-md-5 col-lg-6 image-set">
              <Image src={aboutusimage} alt="aoutus image" className='ms-auto img-fluid ' />
              <Image src={ghraphimage} alt="" className='ghraph-image' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
