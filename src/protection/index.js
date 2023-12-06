import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import ProtectionHeader from './protectionheader'
import PasswordData from './password'

const ProtectionPage = () => {
  return (
    <div>
        <HeaderData/>
        <ProtectionHeader/>
        <PasswordData/>
        <FooterData/>
    </div>
  )
}

export default ProtectionPage