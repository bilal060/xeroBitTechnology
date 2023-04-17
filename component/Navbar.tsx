import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router";
import Image from 'next/image'
import logo from '../assets/images/logo.png'
import next from 'next'
const Navbar = () => {
    const homepage = ['/dashboard']

    const router = useRouter();
    return (
        <>
            <nav className="navbar navbar-expand-lg nav-status">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <Image src={logo} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 g-2">
                            <li className="nav-item">
                                <Link className={router.pathname == "/" ? "active nav-link nav_link" : "nav-link nav_link"} aria-current="page" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={router.pathname.includes("/services") ? "active nav-link nav_link" : "nav-link nav_link"} href="/services">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={router.pathname == "/aboutus" ? "active nav-link nav_link" : "nav-link nav_link"} href="/aboutus">
                                    About Us
                                </Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link className={router.pathname.includes("/portfolio") ? "active nav-link nav_link" : "nav-link nav_link"} href="/portfolio">*/}
                            {/*        Portfolio*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <Link className={router.pathname == "/blog" ? "active nav-link nav_link" : "nav-link nav_link"} href="/blog">*/}
                            {/*        Blog*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <Link className={router.pathname == "/contactus" ? "active nav-link nav_link" : "nav-link nav_link"} href="/contactus">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
