import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Uxuidesign from 'component/component/ux-ui-design/Uxuidesign'
import Uxuidetails from 'component/component/ux-ui-design/Uxuidetails'
import Testimonial from 'component/component/Testimonial/Testimonial'
import Footer from 'component/component/Footer'
export default function Uxuidesignpage() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <hr className="mx-auto" />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <a href='' className='pagination-link'>Services</a>
                        <a href='' >UX/UI Design</a>
                    </div>
                    <h1>UX/UI Design</h1>
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