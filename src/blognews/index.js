import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import BlogNewsHeader from './blognewsheader'
import LogisticSolution from './logisticsolution'

const BlogNews = () => {
  return (
    <div>
        <HeaderData/>
        <BlogNewsHeader/>
        <LogisticSolution/>
        <FooterData/>
    </div>
  )
}

export default BlogNews