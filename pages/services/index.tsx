import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Services from 'component/component/services/Services'
import Projectidea from 'component/component/Projectidea'
import Testimonial from 'component/component/Testimonial/Testimonial'
import Blog from 'component/component/Blog'
import Contactus from 'component/component/Contactus'
import Footer from 'component/component/Footer'
import Steps from 'component/component/services/Steps'
import Strategy from 'component/component/services/Strategy'
export default function Servicespage() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <a href='' className='pagination-link'>Home</a>
                        <a href='' >Services</a>
                    </div>
                    <h1>Our Services</h1>
                </div>
            </header>
            <Services />
            <Projectidea />
            <Strategy />
            <Steps />
            <Testimonial />
            <Blog />
            <Contactus />
            <Footer />
        </>
    )
}