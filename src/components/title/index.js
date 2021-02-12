import React from 'react'

const TitleProjectSection = ({original, byContent}) => {
  return (
    <h1>
      {byContent || original}
    </h1>
  )
}

export default TitleProjectSection
