// external dependencies
import React from 'react'
import { object } from 'prop-types'
import styled from '@emotion/styled'

// constants
import {
	COLORS,
	MQ,
} from '../../utils/styleHelpers'

// relative components
import ImageFluid from '../ImageFluid'

// styled components
const LanguageContainer = styled.div`
	box-sizing: border-box;
	padding: 2px;
	width: 35%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px 0;

	${MQ.S} {
		width: 20%;
	}
`

const LanguageGalleryContainer = styled.div`
	align-items: center;
	border-radius: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
    margin: 0 auto;
	padding: 0 20px;
	width: 100%;

	${MQ.M} {
		margin: 0;
		max-width: 100%;
	}
`

const Caption = styled.div`
	margin-top: 10px;
	text-align: center;
`

const ImageContainer = styled.div`
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`

const imageMaxWidth = '100px'

const LanguageGallery = ({ data }) => (
	<LanguageGalleryContainer>
		<LanguageContainer>
			<ImageContainer>
				<ImageFluid
					fluid={data.express.childImageSharp.fluid}
					maxWidthXs={imageMaxWidth}
				/>
			</ImageContainer>
			<Caption>
				Express
			</Caption>
		</LanguageContainer>
		<LanguageContainer>
			<ImageFluid
				fluid={data.flux.childImageSharp.fluid}
				maxWidthXs={imageMaxWidth}
			/>
			<Caption>
				Flux
			</Caption>
		</LanguageContainer>
		<LanguageContainer>
			<ImageContainer>
				<ImageFluid
					fluid={data.gatsby.childImageSharp.fluid}
					maxWidthXs={imageMaxWidth}
				/>
			</ImageContainer>
			<Caption>
				Gatsby
			</Caption>
		</LanguageContainer>
		<LanguageContainer>
			<ImageContainer>
				<ImageFluid
					fluid={data.jest.childImageSharp.fluid}
					maxWidthXs={imageMaxWidth}
				/>
			</ImageContainer>
			<Caption>
				Jest
			</Caption>
		</LanguageContainer>
		<LanguageContainer>
			<ImageContainer>
				<ImageFluid
					fluid={data.mongoDb.childImageSharp.fluid}
					maxWidthXs={imageMaxWidth}
				/>
			</ImageContainer>
			<Caption>
				MongoDb
			</Caption>
		</LanguageContainer>
		<LanguageContainer>
			<ImageContainer>
				<ImageFluid
					fluid={data.mongoose.childImageSharp.fluid}
					maxWidthXs={imageMaxWidth}
				/>
			</ImageContainer>
			<Caption>
				Mongoose
			</Caption>
		</LanguageContainer>
		<LanguageContainer>
			<ImageContainer>
				<ImageFluid
					fluid={data.node.childImageSharp.fluid}
					maxWidthXs={imageMaxWidth}
				/>
			</ImageContainer>
			<Caption>
				Node
			</Caption>
		</LanguageContainer>
		<LanguageContainer>
			<ImageContainer>
				<ImageFluid
					fluid={data.react.childImageSharp.fluid}
					maxWidthXs={imageMaxWidth}
				/>
			</ImageContainer>
			<Caption>
				React
			</Caption>
		</LanguageContainer>
		<LanguageContainer>
			<ImageContainer>
				<ImageFluid
					fluid={data.reactRouter.childImageSharp.fluid}
					maxWidthXs={imageMaxWidth}
				/>
			</ImageContainer>
			<Caption>
				React Router
			</Caption>
		</LanguageContainer>
		<LanguageContainer>
			<ImageContainer>
				<ImageFluid
					fluid={data.redux.childImageSharp.fluid}
					maxWidthXs={imageMaxWidth}
				/>
			</ImageContainer>
			<Caption>
				Redux
			</Caption>
		</LanguageContainer>
	</LanguageGalleryContainer>
)

LanguageGallery.propTypes = {
	data: object.isRequired,
}

export default LanguageGallery
