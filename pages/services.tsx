import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Services from 'component/component/services/Services'
import Projectidea from 'component/component/Projectidea'
import Testimonial from 'component/component/Testimonial'
import Blog from 'component/component/Blog'
import Contactus from 'component/component/Contactus'
import Footer from 'component/component/Footer'
export default function Servicespage() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <hr className="mx-auto" />
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
            <Testimonial />
            <Blog />
            <Contactus />
            <Footer />
        </>
    )
}