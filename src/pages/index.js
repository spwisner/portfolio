import React, { Component } from 'react'
import { object } from 'prop-types'
import { graphql } from 'gatsby'

// relative components
import Footer from '../components/Footer'
import Layout from '../components/layout'
import SectionHead from '../components/SectionHead'
import SectionAbout from '../components/SectionAbout'
import SectionSkills from '../components/SectionSkills'
import SectionProjects from '../components/SectionProjects'
import Navigation from '../components/Navigation'
import SEO from "../components/seo"

class IndexPage extends Component {
	render() {
		const {
			data,
		} = this.props

		return (
			<Layout>
				<SEO keywords={[`Steve Wisner`, `portfolio`, `gatsby`, `Property Data Generator`, `react`]} title='Home' />
				<Navigation />
				<SectionHead data={data} />
				<SectionAbout data={data} />
				<SectionSkills data={data} />
				<SectionProjects data={data} />
				<Footer data={data} />
			</Layout>
		)
	}
}

IndexPage.propTypes = {
	data: object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
	query {
		appScreenshot: file(relativePath: { eq: "app-screenshot.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		express: file(relativePath: { eq: "express.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		flux: file(relativePath: { eq: "flux.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		gatsby: file(relativePath: { eq: "gatsby.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		headshot: file(relativePath: { eq: "headshot.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		jest: file(relativePath: { eq: "jest.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		js: file(relativePath: { eq: "js.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		mongoDb: file(relativePath: { eq: "mongoDb.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		mongoose: file(relativePath: { eq: "mongoose.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		node: file(relativePath: { eq: "node.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		reactRouter: file(relativePath: { eq: "react-router.png" }) {
			childImageSharp {
				fluid(maxWidth: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		react: file(relativePath: { eq: "react.png" }) {
			childImageSharp {
				fluid(maxWidth: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		redux: file(relativePath: { eq: "redux.png" }) {
			childImageSharp {
				fluid(maxWidth: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
