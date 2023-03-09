import React from 'react'
import Image from 'next/image'
import leftimage from '../assets/images/left-image-bg.svg'
import rightimage from '../assets/images/right-imgage-bg.svg'
import AnimatedButton from './Animated-btn'
const Projectidea = () => {
    return (
        <>
            <section className="project-plan">
                <Image src={leftimage} alt="" className='img-fluid left-image' />
                <div className="container project-idea">
                    <h3 className='font-48 font-weight-700 text-white text-center text-capital mb-32px'>Have an awesome project idea?</h3>
                    <p className='font-16 font-weight text-white text-center font-weight-400 opacity-06'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan <br /> leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    <AnimatedButton text='Lets Discuss' />
                </div>
                <Image src={rightimage} alt="" className='img-fluid right-image' />
            </section>
        </>
    )
}

export default Projectidea
