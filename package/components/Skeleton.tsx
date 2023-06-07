import React from 'react'
import './skeleton.css'

const Skeleton = () => {
  return (
    <div className="movie--isloading">
      <div className="loading-image"></div>
      <div className="loading-content">
        <div className="loading-text-container">
          <div className="loading-main-text"></div>
          <div className="loading-main-text"></div>
          <div className="loading-sub-text"></div>
        </div>
      </div>
      {/* <div className="loading-btn"></div> */}
    </div>
  )
}

export default Skeleton
