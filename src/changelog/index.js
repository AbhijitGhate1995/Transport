import React from 'react'
import HeaderData from '../component/header'
import LogHeader from './logheader'
import FooterData from '../component/footer'
import Version from './version'

const ChangeLog = () => {
  return (
    <div>
        <HeaderData/>
        <LogHeader/>
        <Version/>
        <FooterData/>
    </div>
  )
}

export default ChangeLog