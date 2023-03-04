import React from 'react'
import ContentLoader from 'react-content-loader'

const HomeLoading = props => (
  <ContentLoader
    width={290}
    height={300}
    viewBox="0 0 290 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="290" height="300" />
  </ContentLoader>
)

export default HomeLoading