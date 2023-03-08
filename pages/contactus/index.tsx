import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Contactus from 'component/component/Contactus'
import Contactusicons from 'component/component/contactus/Contactusicons'
import Footer from 'component/component/Footer'
export default function Contactuspage() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <hr className="mx-auto" />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <a href='' className='pagination-link'>Home</a>
                        <a href='' >Contact Us</a>
                    </div>
                    <h1>Contact Us</h1>
                </div>
            </header>
            < Contactusicons />
            <Projectidea />
            <Contactus />
            <Footer />
        </>

    )
}