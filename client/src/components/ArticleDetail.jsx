import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function ArticleDetail() {
  return (
      <div>
          <NavBar/>
          <h1>Article Detail</h1>
            <Link to='/breeds'> Return </Link>
      </div>
  )
}
