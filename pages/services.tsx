import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from 'component/component/Navbar'
import Services from 'component/component/services/Services'
import Projectidea from 'component/component/Projectidea'
import Testimonial from 'component/component/Testimonial'
import Blog from 'component/component/Blog'
import Contactus from 'component/component/Contactus'
import Footer from 'component/component/Footer'
export default function Home() {
    return (
        <>
            <header className='services-header'>
                <Navbar />
                <hr className="mx-auto" />
                <div className='services-hero'>

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