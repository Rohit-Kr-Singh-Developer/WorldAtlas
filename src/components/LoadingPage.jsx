import React from 'react'

function LoadingPage() {
  return (
    <div className='loading-container'>
    <StyledWrapper>
      <div className="loading-wave">
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
      </div>
    </StyledWrapper>
    </div>
  )
}

export default LoadingPage