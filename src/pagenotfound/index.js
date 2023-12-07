import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import PageHeader from './pageheader'
import PageContent from './pagecontent'

const PageNotFound = () => {
  return (
    <div>
        <HeaderData/>
        <PageHeader/>
        <PageContent/>
        <FooterData/>
    </div>
  )
}

export default PageNotFound