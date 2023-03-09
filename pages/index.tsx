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
import Testimonial from 'component/component/Testimonial/Testimonial'
import Footer from 'component/component/Footer'
import AnimatedButton from 'component/component/Animated-btn'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="header pb-5">
        <Navbar />
        <div className="hero font-family-primary container p-0">
          <h1 className="font-56 font-weight-900 text-center mb-32px">Were a Results Driven <br /> Software Development agency</h1>
          <p className='font-18 font-weight-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
            <br /> doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <AnimatedButton text='Learn More' />
        </div>
        <Image src={rightimage} alt="" className='hero-rightimage' />
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
