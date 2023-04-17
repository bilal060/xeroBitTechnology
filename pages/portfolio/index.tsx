import Navbar from 'component/component/Navbar'
import Projectidea from 'component/component/Projectidea'
import Footer from 'component/component/Footer'
import Link from 'next/link'
import PaginationArrow from 'component/assets/images/paginationArrow'
import PortofolioContent from './portofolioContent'
export default function Portfoliopage() {
  return (
    <>
      <div className='portofolio'>
        <header className='main-header'>
          <Navbar />
          <div className='mainheader-hero'>
            <div className='pagination-hero'>
              <Link href='/' className='pagination-link'>Home</Link>
              <PaginationArrow />
              <a href='' >Portfolio</a>
            </div>
            <h1 className='font-weight-700 font-56 pt-2'>Our Portfolio</h1>
          </div>
        </header>
        <PortofolioContent />
        <Projectidea light={false} />
        <Footer />
      </div>
    </>

  )
}