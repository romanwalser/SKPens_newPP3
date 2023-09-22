import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Berries Forest Bulgaria</title>
        <meta property="og:title" content="Berries Forest Bulgaria" />
      </Helmet>
      <a
        href="https://superhotstory.com/short/89892?stream_uuid=3216dad2-65db-4aa0-a5f2-fc31e2be5f65&trek=1"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/bububgbut.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
