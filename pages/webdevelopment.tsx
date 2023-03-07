import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Testimonial from 'component/component/Testimonial'
import Webcustomization from 'component/component/webdevelopment/Webcustomization'
import Buildingsolutions from 'component/component/webdevelopment/Buildingsolutions'
import Technologie from 'component/component/webdevelopment/Technologie'
import Footer from 'component/component/Footer'
export default function Webdeveloment() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <hr className="mx-auto" />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <a href='' className='pagination-link'>Services</a>
                        <a href='' >Web & Mobile Development</a>
                    </div>
                    <h1>Web & Mobile Development</h1>
                </div>
            </header>
            <Webcustomization />
            <Projectidea />
            <Buildingsolutions />
            <Technologie />
            <Testimonial />
            <Footer />
        </>
    )
}