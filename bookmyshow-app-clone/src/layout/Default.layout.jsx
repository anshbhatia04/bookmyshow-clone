import React from 'react';

const DefaultLayoutHoc = 
(Component) => 
({...props}) => {
  return (
    <div>
        <Navbar />
        <Component {...props} />
        </div>
  )
}

export default DefaultLayoutHoc;