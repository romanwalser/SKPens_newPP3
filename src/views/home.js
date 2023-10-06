import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Free SK Inform</title>
        <meta property="og:title" content="Free SK Inform" />
      </Helmet>
      <a
        href="https://superfeedstory.com/short/89588?stream_uuid=e588ec75-7989-49cf-96e5-eaa944450e1b&trek=1"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/skbut.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
