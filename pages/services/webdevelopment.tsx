import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Webcustomization from 'component/component/webdevelopment/Webcustomization'
import Buildingsolutions from 'component/component/webdevelopment/Buildingsolutions'
import Websolutions from 'component/component/webdevelopment/Websolutions'
import Portfolioslider from 'component/component/webdevelopment/Portfolioslider'
import Technologie from 'component/component/webdevelopment/Technologie'
import Footer from 'component/component/Footer'
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
                        <a href='' >Web & Mobile Development</a>
                    </div>
                    <h1 className='font-weight-700 font-56 pt-2'>Web & Mobile Development</h1>
                </div>
            </header>
            <Websolutions />
            <Webcustomization />
            <Buildingsolutions />
            <Technologie />
            <Projectidea />
            <Portfolioslider />
            <Footer />
        </>
    )
}