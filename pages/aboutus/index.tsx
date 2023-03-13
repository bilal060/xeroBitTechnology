import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Dynamicteam from 'component/component/Aboutus/Dynamicteam'
import Projectidea from 'component/component/Projectidea'
import Aboutusdetail from 'component/component/Aboutus/Aboutusdetail'
import Support from 'component/component/Aboutus/Support'
import Footer from 'component/component/Footer'
import Link from 'next/link'
import PaginationArrow from 'component/assets/images/paginationArrow'
export default function Aboutuspage() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <Link href='/' className='pagination-link'>Home</Link>
                        <PaginationArrow />
                        <a href='' >About Us</a>
                    </div>
                    <h1 className='font-weight-700 font-56 pt-2 mb-32px'>About Us</h1>
                    <p className='font-18 font-weight-400 w-50 m-0 text-center'>
                        Get to know Xero But Technology and our expert team. Discover our passion for IT and how we deliver exceptional services. Contact us to learn more.
                    </p>
                </div>
            </header>
            <Dynamicteam />
            <Projectidea />
            <Aboutusdetail />
            <Support />
            <Footer />

        </>
    )
}