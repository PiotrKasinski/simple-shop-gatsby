import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Another = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          data
          description
          person {
            age
            name
          }
          title
        }
      }
    }
  `)
return <pre>
    <h3>{data.site.siteMetadata.author}</h3>
    <h3>{data.site.siteMetadata.description}</h3>
    </pre>
}

export default Another

