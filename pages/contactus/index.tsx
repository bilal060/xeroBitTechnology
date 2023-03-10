import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Contactus from 'component/component/Contactus'
import Contactusicons from 'component/component/contactus/Contactusicons'
import Footer from 'component/component/Footer'
import Link from 'next/link'
import PaginationArrow from 'component/assets/images/paginationArrow'
export default function Contactuspage() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <Link href='/' className='pagination-link'>Home</Link>
                        <PaginationArrow />
                        <a href='' >Contact Us</a>
                    </div>
                    <h1 className='font-weight-700 font-56 pt-2'>Contact Us</h1>
                </div>
            </header>
            < Contactusicons />
            <Projectidea />
            <Contactus />
            <Footer />
        </>

    )
}