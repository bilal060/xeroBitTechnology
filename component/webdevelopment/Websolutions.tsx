import React from 'react'
import Image from 'next/image'
import solutionimg from "../../assets/images/strategy.png"
const Websolutions = () => {
    return (
        <>
            <section className='web-solutions mt-5 mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6'>
                            <h5>You Think, We Code</h5>
                            <h3 className='pt-2'>Productive & engaging web solutions for your business</h3>
                            <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris.</p>
                            <div className="btn-center">
                                <button type="button" className="btn_custome">Get Started Today</button>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <Image src={solutionimg} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Websolutions
