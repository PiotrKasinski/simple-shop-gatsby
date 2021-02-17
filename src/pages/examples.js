// import React from 'react'
// import Header from "../examples/header"
// import Layout from "../components/layout"
// import Another from "../examples/another"
// import {graphql} from "gatsby"

// const examples = ({data}) => {
//     const {
//         site: {
//             siteMetadata: {
//                 person:{
//                     name,
//                     age
//                 },
//             },
//         }
//     } = data
//     return (
//         <Layout>
//             <p>hello from the examples page</p>
//             <Header></Header>
//             <h5>{age}</h5>
//             <Another/>
//         </Layout>
//     )
// }

// export const data = graphql`
// query MyQuery {
//     site {
//       siteMetadata {
//         author
//         data
//         description
//         person {
//           age
//           name
//         }
//         title
//       }
//     }
//   }
  
// `
// export default examples



import React from 'react'
import Header from '../examples/header'
import Layout from "../components/layout"

const examples = () => {
  return (
    <Layout>
      <p> hello examples</p>
      <Header />
      </Layout>
  )
}

export default examples
