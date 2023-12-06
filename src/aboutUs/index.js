import React from 'react'
import HeaderData from '../component/header'
import TransporterData from '../homepage/transporter'
import TestimonialData from '../homepage/testimonial'
import FooterData from '../component/footer'
import AboutPlane from './plane'
import CompanyOverview from './companyoverview'
import AboutLogistic from './logistic'
import AboutPricing from './pricing'
import AboutFaq from './faq'
import AboutImages from './images'

const AboutUs = () => {
  return (
    <div>
        <HeaderData/>
        <AboutPlane/>
        <CompanyOverview/>
        <AboutLogistic/>
        <TransporterData/>
        <TestimonialData/>
        <AboutPricing/>
        <AboutFaq/>
        <AboutImages/>
        <FooterData/>
    </div>
  )
}

export default AboutUs