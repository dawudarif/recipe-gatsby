import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

// info:siteMetaData makes the name of the gatsby-config option set to info
// query names must be unique

const getData = graphql`
query FirstQuery {
  site {
    info:siteMetadata {
      author
      description
      simpleData
      title
      person {
        age
        name
      }
      complexData {
        name
        age
      }
    }
  }
}
`

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>
        {/* Name :{data.site.info.person.name} */}
        site title is : {title}
      </h2>
    </div>
  )
}

export default FetchData
