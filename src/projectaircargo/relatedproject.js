import React from 'react'
import Packaging from "../images/ourproject/packaging.png";
import Plane from "../images/ourproject/plane.png";
import Runway from "../images/ourproject/runway.png";

const RelatedProject = () => {
  return (
    <div>
        <div className='grid xl:mx-60 xl:mt-2 mb-16 mx-40 gap-2'>
            <div className='text-[35px] xl:text-[1.823vw] grid font-bold mt-2 rubikFont'>Related Project</div>
            <div className="flex justify-center items-center">
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-6">
                <div className="grid">
                  <img src={Packaging} alt="Packaging" />
                </div>
                <div className="grid">
                  <img src={Plane} alt="Plane" />
                </div>
                <div className="grid">
                  <img src={Runway} alt="Runway" />
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RelatedProject