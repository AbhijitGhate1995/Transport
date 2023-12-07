import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import AboutImages from '../aboutUs/images'
import OurTeamHeader from './ourteamheader'
import TeamTranporter from './tranporter'
import AboutTranporter from './about'

const OurTeamPage = () => {
  return (
    <div>
        <HeaderData/>
        <OurTeamHeader/>
        <TeamTranporter/>
        <AboutTranporter/>
        <AboutImages/>
        <FooterData/>
    </div>
  )
}

export default OurTeamPage