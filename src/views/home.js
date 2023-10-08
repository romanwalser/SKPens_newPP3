import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bratislava Free Inform</title>
        <meta property="og:title" content="Bratislava Free Inform" />
      </Helmet>
      <a
        href="https://bestnewsarea.com/short/89588?stream_uuid=9d828ebf-8fbc-41a7-9e6e-cf12d2316daf&trek=1"
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
