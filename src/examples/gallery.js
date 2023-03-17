import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  query {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 200, height: 200)
        }
      }
    }
  }
`

const Gallery = () => {
	const data = useStaticQuery(query)
	const nodes = data.allFile.nodes
	// console.log(data)
	return (
		<Wrapper>
			{nodes.map((image, index) => {
				const { name } = image
				console.log(name)
				const pathToImage = getImage(image)
				// console.log(image)
				return (
					<article key={index} className="item">
						<GatsbyImage image={pathToImage}
							// image={image.childImageSharp.gatsbyImageData} 
							alt={name} className="gallery-img" />
						<p>{name}</p>
					</article>
				)
			})}
		</Wrapper>
	)
}

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
.item{
	margin-right: 1rem;
}
.gallery-img{
border-radius: 1rem;
}
`


export default Gallery