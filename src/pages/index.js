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

class IndexPage extends Component {
	render() {
		const {
			data,
		} = this.props

		return (
			<Layout>
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
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		express: file(relativePath: { eq: "express.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		flux: file(relativePath: { eq: "flux.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		gatsby: file(relativePath: { eq: "gatsby.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		headshot: file(relativePath: { eq: "headshot.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		jest: file(relativePath: { eq: "jest.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		js: file(relativePath: { eq: "js.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		mongoDb: file(relativePath: { eq: "mongoDb.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		mongoose: file(relativePath: { eq: "mongoose.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		node: file(relativePath: { eq: "node.png" }) {
			childImageSharp {
				fluid(maxWidth: 200) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		reactRouter: file(relativePath: { eq: "react-router.png" }) {
			childImageSharp {
				fluid(maxWidth: 100) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		react: file(relativePath: { eq: "react.png" }) {
			childImageSharp {
				fluid(maxWidth: 100) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		redux: file(relativePath: { eq: "redux.png" }) {
			childImageSharp {
				fluid(maxWidth: 100) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
	}
`