import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import StyleHeader from './styleheader'
import StyleContent from './stylecontent'
import FooterImg from '../homepage/footerimg'

const StyleGuide = () => {
  return (
    <div>
        <HeaderData/>
        <StyleHeader/>
        <StyleContent/>
        <FooterImg/>
        <FooterData/>
    </div>
  )
}

export default StyleGuide
