import React from 'react'
import Image from 'next/image'
import mobileicon from "../../assets/images/mobile icon.svg"
import nativicon from "../../assets/images/nativ icon.svg"
const Webcustomization = () => {
    return (
        <>
            <section className='web-customization font-family-primary'>
                <div className='container'>
                    <div className='row pt-5 pb-5'>
                        <div className='col-md-12 col-lg-12'>
                            <h6 className='section-first-heading font-weight-500 font-18-17 text-center pt-2 pb-2'>Customization From Start To End</h6>
                            <h2 className='section-sub-heading font-weight-700 font-36-46 text-center text-capital pb-4'>User experience-centred mobile apps</h2>
                            <p className='font-16 font-weight-400 text-dark-gray text-center pt-3 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 mt-5'>
                            <div className='web-native rounded-12 bg-white px_35 h-100'>
                                <Image src={mobileicon} alt="mobileicon" className='img-fluid content-center-992' />
                                <h4 className='font-weight-700 font-24 text_center_justification-992 pt-3'>Native Mobile Development</h4>
                                <p className='font-weight-400 font-16 text-dark-gray opacity-06 text_center_justification-992 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulm nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                                <h6 className='font-weight-700 font-16 text_center_justification-992 pt-3'><span className='text-xero-primary'>Frameworks:</span> Angular, Typescript, JavaScript, CSS, and Vue, js</h6>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 mt-5'>
                            <div className='web-native rounded-12 bg-white px_35 h-100'>
                                <Image src={nativicon} alt="nativicon" className='img-fluid content-center-992' />
                                <h4 className='font-weight-700 font-24 text_center_justification-992 pt-3'>Cross-platform Mobile Development</h4>
                                <p className='font-weight-400 font-16 text-dark-gray opacity-06 text_center_justification-992 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulm nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                                <h6 className='font-weight-700 font-16 text_center_justification-992 pt-3'><span className='text-xero-primary'>Frameworks:</span> React Native, Flutter, and Ionic</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Webcustomization
