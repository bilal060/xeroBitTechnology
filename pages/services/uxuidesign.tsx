import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Uxuidesign from 'component/component/ux-ui-design/Uxuidesign'
import Uxuidetails from 'component/component/ux-ui-design/Uxuidetails'
import Testimonial from 'component/component/Testimonial/Testimonial'
import Footer from 'component/component/Footer'
import Link from 'next/link'
import PaginationArrow from 'component/assets/images/paginationArrow'
export default function Uxuidesignpage() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <Link href='/services' className='pagination-link'>Services</Link>
                        <PaginationArrow />
                        <a href='' >UX/UI Design</a>
                    </div>
                    <h1 className='font-weight-700 font-56 pt-2'>UX/UI Design</h1>
                </div>
            </header>
            <Uxuidesign />
            <Projectidea />
            <Uxuidetails />
            <Testimonial />
            <Footer />
        </>

    )
}