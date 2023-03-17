import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Gallery from '../examples/gallery';

// const Testing = props => {
const Testing = ({ data }) => {
  // const author = data.site.info.author
  // console.log(props)
  return (
    <Layout>
      <main className='page'>
        <Gallery />
      </main>
    </Layout>
  )
}

// we are exporting the data here to access it in the props in the above main function
// query FirstQuery
// export const data = graphql`
// query {
//   site {
//     info:siteMetadata {
//       author
//       description
//       simpleData
//       title
//       person {
//         age
//         name
//       }
//       complexData {
//         name
//         age
//       }
//     }
//   }
// }
// `

export default Testing