// external dependencies
import React from 'react'
import { object } from 'prop-types'
import styled from '@emotion/styled'

// constants
import {
	sectionContainer,
	COLORS,
	MAX_SECTION_WIDTH,
	MQ,
} from '../../utils/styleHelpers'

// relative components
import ImageFluid from '../ImageFluid'

// styled components
const SectionHeadWrap = styled.div`
	margin: 20px;
	border-bottom: 1px solid #586d4a;
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
	display: flex;
	flex-wrap: wrap;
	margin: 50px auto;
	max-width: 800px;
	width: 100%;

	${MQ.M} {
		flex-wrap: nowrap;
	}
`

const TextHeader = styled.div`
	color: ${COLORS.GREEN_DARK};
	font-size: 30px;
	padding: 10px 0;
`

const TextSubHeader = styled.div`
	color: #22211f;
	font-size: 20px;
	padding: 10px 0;
`

const TextParagraph = styled.div`
	color: ${COLORS.BLACK};
	font-size: 16px;
	line-height: 1.2em;
	padding: 5px 0;
`

const TextParagraphContact = styled.div`
	color: ${COLORS.BLACK};
	font-size: 16px;
	line-height: 1.2em;
	padding: 5px 0;
`

const SpanUnderline = styled.span`
	border-bottom: 1px solid ${({ color }) => color};
`

const ExternalLink = styled.a`
	color: ${COLORS.BLUE_LINK};
`

const SectionColumnAbout = styled.div`
	width: 100%;

	${MQ.M} {
		padding-right: 20px;
		width: 70%;
	}
`

const aboutMeText = `In 2014, I taught myself how to code and this became a hobby.  Three year later, I decided to take a risk and made my hobby a career.  I resigned from my job and attended a  3-month web development immersive program.  Currently, I’m employed as a frontend software engineer at Business.com where I build web applications in React.   In the evenings, I work on Property Data Generator.  And, on the weekends, I'm watching soccer.`
const linkedInLink = `https://linkedin.com/in/steve-wisner`
const githubLink = `https://github.com/spwisner`

const SectionHead = ({ data }) => (
	<SectionHeadWrap id='section-about'>
		<SectionHeadContainer>
			<SectionColumnAbout>
				<TextHeader>
					About
				</TextHeader>
				<TextParagraph>
					{aboutMeText}
				</TextParagraph>
			</SectionColumnAbout>
			<div>
				<TextSubHeader>
					Contact
				</TextSubHeader>
				<TextParagraphContact>
					Location: Boston, MA
				</TextParagraphContact>
				<TextParagraphContact>
					Linkedin: <ExternalLink href={linkedInLink}>{linkedInLink}</ExternalLink>
				</TextParagraphContact>
				<TextParagraphContact>
					Github: <ExternalLink href={githubLink}>{githubLink}</ExternalLink>
				</TextParagraphContact>
			</div>
		</SectionHeadContainer>
	</SectionHeadWrap>
)

SectionHead.propTypes = {
	data: object.isRequired,
}

export default SectionHead
