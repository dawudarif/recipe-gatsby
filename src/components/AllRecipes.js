import React from 'react'
import RecipesList from './RecipesList'
import TagsList from './TagsList'
import { graphql, useStaticQuery } from 'gatsby'



const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        id
        title
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        cookTime
        prepTime
        servings
      }
    }
  }`


const AllRecipes = () => {
  // const {
  // 	allContentfulRecipe: { nodes: recipes },
  // } = useStaticQuery(query)

  const data = useStaticQuery(query);
  // console.log(data)
  const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes)
  return (
    <section className='recipes-container'>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes