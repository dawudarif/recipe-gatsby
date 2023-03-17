import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import Seo from '../components/SEO'

const TagTemplate = ({ data, pageContext }) => {
	// console.log(pageContext) = sweet
	//pageContext comes from context in createPage frm gatsby-node.js 

	// console.log(props)
	const recipes = data.allContentfulRecipe.nodes
	return (
		<Layout>
			<Seo title={pageContext.tag} />
			<main className="page">
				<h2>{pageContext.tag}</h2>
				<div className="tag-recipes">
					<RecipesList recipes={recipes} />
				</div>
			</main>
		</Layout>
	)
}

export const query = graphql`
query GetRecipeByTag($tag:String) {
  allContentfulRecipe(sort: {title: ASC}, filter: {content: {tags: {eq: $tag}}}) {
    nodes {
      title
      id
      prepTime
      cookTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
}
`

export default TagTemplate

// gatsby node
// file system api