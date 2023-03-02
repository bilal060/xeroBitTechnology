import React from 'react'

function Strategy() {
    return (
        <>
            <section className='services-strategy'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-5'>
                            <h5>Our strategy</h5>
                            <h3 className='mt-2'>How Analytics Helping Face Challenges</h3>
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active nav_link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Our Value</button>
                                    <button className="nav-link nav_link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Our Vision</button>
                                    <button className="nav-link nav_link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Our Mission</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>1</div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>2</div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>cdhcb</div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-7'>




                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Strategy
