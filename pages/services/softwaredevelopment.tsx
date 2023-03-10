import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Testimonial from 'component/component/Testimonial/Testimonial'
import Footer from 'component/component/Footer'
import Choseus from 'component/component/Choseus'
import Link from 'next/link'
import PaginationArrow from 'component/assets/images/paginationArrow'
import DynamicTeam from 'component/component/softwareDevelopment/dynamicTeam'
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
                    <h1 className='font-weight-700 font-56 pt-2'>Software Development</h1>
                </div>
            </header>
            <DynamicTeam />
            <Projectidea />
            <Choseus />
            <Testimonial />
            <Footer />
        </>

    )
}