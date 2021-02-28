import _ from 'lodash'
import React, {useState, useEffect} from 'react'
import './image-frame.scss'

const ImageFrame = ({innerWidth, imagesShowcase}) => {
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  useEffect(() => {
    setUrl(innerWidth < 420 
      ? _.get(imagesShowcase, '[0].url') 
      : _.get(imagesShowcase, '[1].url'))
    setDescription(innerWidth > 420 
      ? _.get(imagesShowcase, '[0].description') 
      : _.get(imagesShowcase, '[1].description')  
    )
  }, [imagesShowcase, innerWidth])

  return (
    <div className="box-showcase-box">
      <img src={url} alt={description}></img>
      <p className="">{description}</p>
    </div>
  )
}

export default ImageFrame
