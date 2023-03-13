import React from 'react'
import Image from 'next/image'
import aboutsupportimage from "../../assets/images/aboutsupport.png"
function Support() {
    return (
        <>
            <section className='aboutus_support'>
                <div className="container py-5 mb-4">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-12">
                            <h6 className='section-first-heading text_center_justification pt-4 mt-1 mb-3'>Support</h6>
                            <h2 className='font-36-46 section-sub-heading text_center_justification pb-2'>frequently asked questions</h2>
                            <p className='font-16 font-weight-400 text-dark-gray pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                            <Image src={aboutsupportimage} alt="aboutsupport-image" className='img-fluid mx-auto' />
                        </div>
                        <div className="col-md-8 col-lg-8 col-12">
                            <div className="accordion .collapes_bt" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header " id="headingOne">
                                        <button className="accordion-button custom-accordian-btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Who We Are?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body pb-2">
                                            At Xero Bit Technology, we are a team of digital experts dedicated to helping businesses achieve their digital goals. With years of experience in the industry, we have developed a deep understanding of the digital landscape and the tools and technologies that power it.
                                            Our team is made up of skilled professionals in digital strategy, UX design, product design, content strategy, website design, and social media management.
                                            We are passionate about what we do and committed to delivering superior results for our clients.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button custom-accordian-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Our Philosophy?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body pb-2">
                                            At Xero Bit Technology, we believe in a collaborative approach to digital solutions. We work closely with our clients to understand their unique business needs and develop customized strategies that meet their objectives. Our philosophy is centered around providing exceptional customer service and delivering the highest quality solutions. We think that openness and communication are essential to creating strong relationships with our customers.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button custom-accordian-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Mission Statement?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body pb-2">
                                            Our mission is to empower businesses to achieve their full potential through the effective use of technology and design. We believe that a seamless combination of technology and design is essential for businesses to succeed in today's fast-paced, digital-first world. By providing customized UX design, product design, content strategy, website design and concept, and social media management solutions, we help businesses stay ahead of the competition and achieve their goals.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button custom-accordian-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Vision Statement?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body pb-2">
                                            Our vision is to be a leading provider of technology and design solutions that enable businesses to succeed in the digital age. We aspire to help businesses of all sizes develop and implement effective digital strategies that drive growth, increase customer engagement, and improve operational efficiency, by providing a range of services such as UX design, product design, content strategy, website design and concept, and social media management. Our goal is to be recognized as a company that helps businesses thrive in a digital-first world, through our commitment to excellence, innovation, and customer satisfaction.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button custom-accordian-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Our Values?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body pb-2">
                                            At Xero Bit Technology, we believe in operating with integrity and honesty. We value transparency, open communication, and accountability. We are committed to delivering the best possible solutions to our clients and ensuring their satisfaction. We are committed to promoting an innovative and ever-improving culture. Our team members are our greatest asset, and we invest in their growth and development to ensure that they have the skills and knowledge necessary to deliver exceptional results for our clients.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button custom-accordian-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Our Achievements?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body pb-2">
                                            We have worked with companies of all sizes and in a variety of sectors over the years. We have helped our clients achieve their digital goals and drive growth and success. Our achievements are a testament to our commitment to excellence and our passion for what we do. We are proud of the work we have done and the partnerships we have built with our clients.                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Support
