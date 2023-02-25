import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'component/styles/Home.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="header">
        <hr />
        <div className="hero">
          <h1 className="hero-heading">Were a Results Driven <br /> Software Development agency</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
            <br /> doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500} duration={2}>

          <button type="button" className="btn_custome">Learn More</button>
            </ScrollAnimation>
        </div>
      </header>
      <section className="container services">
        <div className="services_typoghrapy">
          <h6>Our Services</h6>
          <h2>What we offer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan
            <br /> leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
        </div>
        <div className="row spacing_page gy-5">
          <div className="col-12 col-md-4">
            <div className="services-cards"> <img src="assets/images/DigitalStrategy.png" alt="DigitalStrategy" width="80px" height="80px" />
              <h3>Digital Strategy</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
              <a href=''> <img className="ms-auto" src="assets/images/arrow.png" alt="arrow" /> </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="services-cards"> <img src="assets/images/UXDesign.png" alt="DigitalStrategy" width="80px" height="80px" />
              <h3>UX Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
              <a href=''> <img className="ms-auto" src="assets/images/arrow.png" alt="arrow" /> </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="services-cards"> <img src="assets/images/ProductDesign.png" alt="DigitalStrategy" width="80px" height="80px" />
              <h3>Product Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
              <a href=''> <img className="ms-auto" src="assets/images/arrow.png" alt="arrow" /> </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="services-cards"> <img src="assets/images/ContentStrategy.png" alt="DigitalStrategy" width="80px" height="80px" />
              <h3>Content Strategy</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
              <a href=''> <img className="ms-auto" src="assets/images/arrow.png" alt="arrow" /> </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="services-cards"> <img src="assets/images/Design & Concept.png" alt="DigitalStrategy" width="80px" height="80px" />
              <h3>Design &amp; Concept</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
              <a href=''> <img className="ms-auto" src="assets/images/arrow.png" alt="arrow" /> </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="services-cards"> <img src="assets/images/SocialMedia.png" alt="DigitalStrategy" width="80px" height="80px" />
              <h3>Social Media</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
              <a href=''> <img className="ms-auto" src="assets/images/arrow.png" alt="arrow" /> </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="btn_custome">Learn More</button>
        </div>
      </section>
      <section className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>About US</h5>
              <h2>Were A Dynamic Team Of Software Developers.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum nec. In accumsan sapien eu egestas ultricies.</p>
              <ul>
                <li>Enim adminim veniam, quis nostrud tation</li>
                <li>Enim adminim veniam, quis nostrud tation</li>
                <li>Enim adminim veniam, quis nostrud tation</li>
                <button type="button" className="btn_custome">Get Started Today</button>
              </ul>
            </div>
            <div className="col-md-6">
              <img className="ms-auto" src="assets/images/aboutus.png" alt="aboutus" />
            </div>
          </div>
        </div>
      </section>
      <section className="project-plan">
        <div className="container">
          <h3>Have an awesome project idea?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan <br /> leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
          <button type="button" className="btn_custome">Lets Discuss</button>
        </div>
      </section>
      <section className="Development">
        <div className="container-fluid row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
            <h5>Why choose us</h5>
            <h2>Software Development Company that helps you succeed.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum. Duis accumsan diam mauris, sit amet tristique felis rutrum . In accumsan sapien eu egestas ultricies.</p>
            <button type="button" className="btn_custome">Get Started Today</button>
          </div>
        </div>
      </section>


    </>
  )
}
