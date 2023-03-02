import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Footer from 'component/component/Footer'
export default function Aboutuspage() {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <hr className="mx-auto" />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <a href='' className='pagination-link'>Home</a>
                        <a href='' >About Us</a>
                    </div>
                    <h1>About Us</h1>
                </div>
            </header>
            <Projectidea />
            <h1 className='text-center'>other componets in progresss......</h1>
            <Footer />
        </>

    )
}