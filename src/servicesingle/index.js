import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import ServiceSingleHeader from './servicesingleheader'
import TransportService from './transportservice'
import BenefitService from './benefitservice'

const ServiceSingle = () => {
  return (
    <div>
        <HeaderData/>
        <ServiceSingleHeader/>
        <TransportService/>
        <BenefitService/>
        <FooterData/>
    </div>
  )
}

export default ServiceSingle