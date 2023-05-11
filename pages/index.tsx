import Head from 'next/head'
import Image from 'next/image'
import rightimage from '../assets/images/hero-right-animation.svg'
import { Inter } from 'next/font/google'
import Navbar from 'component/component/Navbar'
import Services from 'component/component/services/Services'
import Aboutus from 'component/component/Aboutus'
import Projectidea from 'component/component/Projectidea'
import Choseus from 'component/component/Choseus'
import Contactus from 'component/component/Contactus'
import Testimonial from 'component/component/Testimonial/Testimonial'
import Footer from 'component/component/Footer'
import AnimatedButton from 'component/component/Animated-btn'
import Blog from 'component/component/Blog'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="header pb-5">
        <Navbar />
        <div className="hero font-family-primary container p-0">
          <h1 className="font-56 font-weight-900 text-center mb-32px">Empowering Your Digital <br /> Dreams</h1>
          <p className='font-18 font-weight-400 w-50 m-0'>
            Empowering businesses to achieve their full potential through our up to date technology and design.
          </p>
          <AnimatedButton hrefto="aboutus" light={true} text='Learn More' />
        </div>
        <Image src={rightimage} alt="animated-image" className='hero-rightimage' />
      </header>
      <Services />
      <Aboutus />
      <Projectidea light={true} />
      <Choseus />
      <Testimonial />
      <Blog  />
      <Contactus />
      <Footer />
    </>
  )
}
