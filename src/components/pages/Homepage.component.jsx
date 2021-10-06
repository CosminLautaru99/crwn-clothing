import React from 'react';
//components
import DirectoryComponent from '../directory/Directory.component';
//styles
import './Homepage.styles.scss'

const HomePageComponent = () => {
  return (
    <div className="homepage">
      <DirectoryComponent />
    </div>
  )
}

export default HomePageComponent;