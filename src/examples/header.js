import React from 'react'
import {useStaticQuery, graphql} from "gatsby"

const getData= graphql`
{
  site {
  info: siteMetadata {
      title
      description
      data
      author
      person {
        name
        age
      }
    }
  }
}
`
const Header = () => {
  const data= useStaticQuery(getData);
  const {site:{info:{title, person:{name},description}}}= useStaticQuery(getData)
  return (
    <div>
      <h2>title: {title}</h2>
      <h2>title: {name}</h2> 
      <h2>title: {description}</h2> 
    </div>
  )
}

export default Header
