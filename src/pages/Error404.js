import React from 'react'
import {Link} from "react-router-dom"



function Error404() {
  return (
    <div>
        <h2>Error404</h2>
        <p>Page not found --- please go back to homepage <Link to="/">HomePage </Link></p>
    </div>
  )
}

export default Error404