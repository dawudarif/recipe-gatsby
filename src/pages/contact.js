import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'
import Seo from '../components/SEO'


const contact = ({ data }) => {
	const recipes = data.allContentfulRecipe.nodes
	return (
		<Layout>
			<Seo title="Contact Us" />
			<main className='page'>
				<section className='contact-page'>
					<article className='contact-info'>
						<h3>Want to get in touch?</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nisi.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam officia ducimus iusto obcaecati molestiae itaque a dolorem! Dolores non neque et quo minima dolorum beatae accusamus natus ipsa earum.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque enim veritatis animi omnis. Praesentium enim sequi reiciendis commodi, iste corrupti? Iste, asperiores ratione sunt magnam accusamus voluptatibus sed necessitatibus.
						</p>
					</article>
					<article>
						<form className="form contact-form" action="https://formspree.io/f/mqkoljvq"
							method="POST">
							<div className="form-row">
								<label htmlFor="name">Your Name</label>
								<input type="text" name='name' id='name' />
							</div>
							<div className="form-row">
								<label htmlFor="email">Your Email</label>
								<input type="email" name='email' id='email' />
							</div>
							<div className="form-row">
								<label htmlFor="message">Message</label>
								<input type="text" name='message' id='message' />
							</div>
							<button type='submit' className='btn-block'>Submit</button>
						</form>
					</article>
				</section>
				<section className="featured-recipes">
					<h5>Look at this Awesomesouce!</h5>
					<RecipesList recipes={recipes} />
				</section>
			</main>
		</Layout>
	)
}


export const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        id
		  title
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        prepTime
        servings
        cookTime
      }
    }
  }
`

export default contact