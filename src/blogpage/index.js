import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import BlogHeader from './blogheader'
import OurBlog from './ourblog'

const BlogPage = () => {
  return (
    <div>
        <HeaderData/>
        <BlogHeader/>
        <OurBlog/>
        <FooterData/>
    </div>
  )
}

export default BlogPage