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
const SectionHeadWrap = styled.div`
	margin: 70px 20px 20px 20px;

	${MQ.M} {
		margin: 20px;
	}
`

const ImageWrap = styled.div`
	display: flex;
	justify-content: center;
`

const TextContainer = styled.div`
	align-items: center;
	background: #323e29;
	display: flex;
	flex-direction: column;
	height: 100px;
	justify-content: space-evenly;
	position: absolute;
    right: 0;
    top: 10%;
	width: 300px;
`

const SectionHeadContainer = styled.div`
	margin: 50px auto;
	max-width: 800px;
	position: relative;
	width: 100%;
`

const TextHeader = styled.div`
	color: ${COLORS.WHITE};
	font-size: 24px;
`

const TextParagraph = styled.div`
	color: ${COLORS.WHITE};
	font-size: 15px;
`

const SectionHead = ({ data }) => (
	<SectionHeadWrap id='section-home'>
		<SectionHeadContainer>
			<ImageWrap>
				<ImageFluid
					fluid={data.headshot.childImageSharp.fluid}
					maxWidthXs='400px'
				/>
			</ImageWrap>
			<TextContainer>
				<TextHeader>
					Steve Wisner
				</TextHeader>
				<TextParagraph>
					Full-Stack Developer
				</TextParagraph>
			</TextContainer>
		</SectionHeadContainer>
	</SectionHeadWrap>
)

SectionHead.propTypes = {
	data: object.isRequired,
}

export default SectionHead
