import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import {Helmet} from "react-helmet";
import "./Add.scss"
function Add() {
  return (
    <div>
       <Helmet>
        <title>Add</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <Navbar/>
    </div>
  )
}

export default Add
