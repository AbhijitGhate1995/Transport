import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import ProjectFooter from './projectfooter'
import ProjectImages from './projectimages'
import ProjectHeader from './projectheader'

const TransportingProject = () => {
  return (
    <div>
        <HeaderData/>
        <ProjectHeader/>
        <ProjectImages/>
        <ProjectFooter/>
        <FooterData/>
    </div>
  )
}

export default TransportingProject