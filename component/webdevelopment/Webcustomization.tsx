import React from 'react'
import Image from 'next/image'
import mobileicon from "../../assets/images/mobile icon.svg"
import nativicon from "../../assets/images/nativ icon.svg"
const Webcustomization = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h5 className=''>Customization From Start To End</h5>
                        <h2 className=''>User experience-centred mobile apps</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    </div>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                        <Image src={mobileicon} alt="img" />
                        <h4>Native Mobile Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulm nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                        <h6><span>Frameworks:</span> Angular, Typescript, JavaScript, CSS, and Vue, js</h6>
                    </div>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                        <Image src={nativicon} alt="img" />
                        <h4>Native Mobile Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulm nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                        <h6><span>Frameworks:</span> Angular, Typescript, JavaScript, CSS, and Vue, js</h6>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Webcustomization
