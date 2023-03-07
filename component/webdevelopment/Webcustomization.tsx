import React from 'react'
import Image from 'next/image'
import mobileicon from "../../assets/images/mobile icon.svg"
import nativicon from "../../assets/images/nativ icon.svg"
const Webcustomization = () => {
    return (
        <>
            <section className='web-customization'>
                <div className='container'>
                    <div className='row pt-5 pb-5'>
                        <div className='col-md-12 col-lg-12'>
                            <h5 className='pt-2'>Customization From Start To End</h5>
                            <h2 className='pt-3'>User experience-centred mobile apps</h2>
                            <p className='web-customization-p pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 mt-5'>
                            <div className='web-native'>
                                <Image src={mobileicon} alt="img" className='img-fluid' />
                                <h4>Native Mobile Development</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulm nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                                <h6><span>Frameworks:</span> Angular, Typescript, JavaScript, CSS, and Vue, js</h6>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 mt-5'>
                            <div className='web-native'>
                                <Image src={nativicon} alt="img" className='img-fluid' />
                                <h4>Cross-platform Mobile Development</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulm nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                                <h6><span>Frameworks:</span> React Native, Flutter, and Ionic</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Webcustomization
