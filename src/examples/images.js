import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import img from '../images/balls/wilson.jpg'
import Image from 'gatsby-image'

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "balls/molten.jpg"}) {
      childImageSharp {
        fixed (width:280){
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "balls/adidas.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
    const data = useStaticQuery(getImages)  
    console.log(data)
    return (
        <section className="images">
            <article className="single-image">
                <h3>basic image</h3>
                <img src={img} alt="" width="100%" />
            </article>
            <article className="single-image">
                <h3>fixed image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article className="single-image">
                <h3>fluid image</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
            </article>
        </section>
    )
}

export default Images
