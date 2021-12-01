import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => {
  return (
    <ContentLoader
      speed={1}
      width={400}
      height={450}
      viewBox="0 0 450 400"
      preserveAspectRatio="xMidYMax slice" x="0" y="30"
      backgroundColor="yellow"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="72" y="53" rx="0" ry="0" width="2" height="300" />
      <rect x="286" y="55" rx="0" ry="0" width="2" height="300" />
      <rect x="71" y="53" rx="0" ry="0" width="216" height="2" />
      <rect x="71" y="353" rx="0" ry="0" width="216" height="2" />
      <circle cx="177" cy="147" r="44" />


      <rect x="131" y="236" rx="0" ry="0" width="92" height="9" />



    </ContentLoader>
  )
}


export default Loader