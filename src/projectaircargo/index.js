import React from 'react'
import HeaderData from '../component/header'
import FooterData from '../component/footer'
import AirCargoHeader from './aircargoheader'
import ProjectDetail from './projectdetail'
import WarehouseTransportaion from './warehousetransportaion'
import RelatedProject from './relatedproject'

const ProjectAirCargo = () => {
  return (
    <div>
        <HeaderData/>
        <AirCargoHeader/>
        <ProjectDetail/>
        <WarehouseTransportaion/>
        <RelatedProject/>
        <FooterData/>
    </div>
  )
}

export default ProjectAirCargo