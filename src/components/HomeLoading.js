import React from 'react'
import ContentLoader from 'react-content-loader'

//This component is used to imitate card loading.

const HomeLoading = props => (
  <ContentLoader
    width={230}
    height={320}
    viewBox="0 0 230 320"
    backgroundColor="#e9f3f4"
    foregroundColor="#d2e3e5"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="230" height="320" />
  </ContentLoader>
)

export default HomeLoading