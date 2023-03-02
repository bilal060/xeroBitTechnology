import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Testimonial from 'component/component/Testimonial'
import Footer from 'component/component/Footer'
import Choseus from 'component/component/Choseus'
export default function Webdeveloment() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <hr className="mx-auto" />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <a href='' className='pagination-link'>Services</a>
                        <a href='' >Software Development</a>
                    </div>
                    <h1>Software Development</h1>
                </div>
            </header>
            <h1 className='text-center'>other componets in progresss......</h1>
            <Projectidea />
            <Choseus />
            <Testimonial />
            <Footer />
        </>

    )
}