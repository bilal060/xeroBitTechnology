import Head from 'next/head'
import Navbar from 'component/component/Navbar'
import Dynamicteam from 'component/component/Aboutus/Dynamicteam'
import Projectidea from 'component/component/Projectidea'
import Aboutusdetail from 'component/component/Aboutus/Aboutusdetail'
import Support from 'component/component/Aboutus/Support'
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
            <Dynamicteam />
            <Projectidea />
            <Aboutusdetail />
            <Support />
            <Footer />

        </>
    )
}