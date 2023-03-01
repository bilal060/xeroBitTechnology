import Head from 'next/head'
import Image from 'next/image'
import rightimage from '../assets/images/hero-right-animation.svg'
import { Inter } from 'next/font/google'
import Navbar from 'component/component/Navbar'
import Services from 'component/component/services/Services'
import Aboutus from 'component/component/Aboutus'
import Projectidea from 'component/component/Projectidea'
import Choseus from 'component/component/Choseus'
import Blog from 'component/component/Blog'
import Contactus from 'component/component/Contactus'
import Testimonial from 'component/component/Testimonial'
import Footer from 'component/component/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="header">
        <Navbar />
        <hr className="mx-auto" />
        <div className="hero">
          <h1 className="hero-heading">Were a Results Driven <br /> Software Development agency</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
            <br /> doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className="btn_custome">Learn More</button>
        </div>
        <Image src={rightimage} alt="" className='hero-rightimage img-fluid' />
      </header>
      <Services />
      <Aboutus />
      <Projectidea />
      <Choseus />
      <Testimonial />
      <Blog />
      <Contactus />
      <Footer />
    </>
  )
}
