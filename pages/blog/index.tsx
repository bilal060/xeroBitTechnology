import Navbar from 'component/component/Navbar'
import Footer from 'component/component/Footer'
import Link from 'next/link'
import PaginationArrow from 'component/assets/images/paginationArrow'
import BlogContent from 'component/component/Blog/Blogs'
import ExploreTopics from './exploreTopics'



const blog = () => {
    return (
        <>
            <header className='main-header'>
                <Navbar />
                <div className='mainheader-hero'>
                    <div className='pagination-hero'>
                        <Link href='/' className='pagination-link'>Home</Link>
                        <PaginationArrow />
                        <a href='' >Blog</a>
                    </div>
                    <h1 className='font-weight-700 font-56 pt-2'>Blog</h1>
                </div>
            </header>
            <ExploreTopics />
            <BlogContent />
            <Footer />
        </>
    )
}

export default blog
