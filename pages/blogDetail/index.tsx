import Navbar from 'component/component/Navbar'
import Footer from 'component/component/Footer'
import Link from 'next/link'
import PaginationArrow from 'component/assets/images/paginationArrow'
import BlogContent from 'component/component/Blog/Blogs'
import EachBlogDetail from './BlogDetail'
const blogDetail = () => {
    return (
        <>
            <Navbar />
            <EachBlogDetail />     
            <Footer />
        </>
    )
}

export default blogDetail
