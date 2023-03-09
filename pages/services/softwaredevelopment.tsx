import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Testimonial from 'component/component/Testimonial/Testimonial'
import Footer from 'component/component/Footer'
import Choseus from 'component/component/Choseus'
import Link from 'next/link'
import PaginationArrow from 'component/assets/images/paginationArrow'
export default function Webdeveloment() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <Link href='/services' className='pagination-link'>Services</Link>
                        <PaginationArrow />
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