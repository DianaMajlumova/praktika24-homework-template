import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import {Helmet} from "react-helmet";
import "./Detale.scss"
function Detale() {
  return (
    <div>
       <Helmet>
        <title>Detale</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <Navbar/>
    </div>
  )
}

export default Detale
