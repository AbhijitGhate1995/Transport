import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import AboutPricing from '../aboutUs/pricing'
import TestimonialData from '../homepage/testimonial'
import PricingHeader from './pricingheader'

const PricingPage = () => {
  return (
    <div>
        <HeaderData/>
        <PricingHeader/>
        <AboutPricing/>
        <TestimonialData/>
        <FooterData/>
    </div>
  )
}

export default PricingPage