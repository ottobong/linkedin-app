import React from 'react'
import './Widgets.css'
import { FiberManualRecordRounded, InfoRounded } from '@mui/icons-material'


function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">

      <div className="widgets__articleLeft">
        <FiberManualRecordRounded />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>

    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoRounded />
      </div>
      

      {newsArticle('Otto and Steph building in React.js', 'Frontend specialization with ALX Africa.')}
      {newsArticle('Landing your first job', 'What does it take to land a remote job in SE.')}
      {newsArticle('Fastest growing continent', 'How tech is making africa evolve at a fast pace.')}
      {newsArticle('Elon Musk interested in Lithium', 'A large amount of lithium has just been discovered in Nigeria.')}
    </div>
  )
}

export default Widgets
