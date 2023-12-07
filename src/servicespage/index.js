import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import ServiceHeader from './serviceheader'
import LogisticService from './logisticservice'
import TestimonialData from '../homepage/testimonial'
import GoodnessData from './goodness'
import FooterDelivery from './footerdelivery'

const ServicesPage = () => {
  return (
    <div>
        <HeaderData/>
        <ServiceHeader/>
        <LogisticService/>
        <GoodnessData/>
        <TestimonialData/>
        <FooterDelivery/>
        <FooterData/>
    </div>
  )
}

export default ServicesPage