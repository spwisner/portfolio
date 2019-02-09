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

const SectionHeadContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 50px auto;
	max-width: 800px;
	width: 100%;
`

const TextHeader = styled.div`
	color: ${COLORS.GREEN_DARK};
	font-size: 30px;
	padding: 10px 0;
	width: 100%;
`

const TextSubHeader = styled.div`
	color: ${COLORS.GREEN_MEDIUM};
	font-size: 24px;
	padding: 10px 0;
	width: 100%;
`

const TextParagraph = styled.div`
	color: ${COLORS.BLACK};
	font-size: 15px;
	line-height: 1.2em;
	padding: 5px 0;
`

const SpanUnderline = styled.span`
	border-bottom: 1px solid ${({ color }) => color};
`

const DescriptionScreenshot = styled.div`
	display: flex;
	flex-direction: column-reverse;
	flex-wrap: wrap;

	${MQ.S} {
		flex-direction: row;
		flex-wrap: nowrap;
	}
`

const TextContainer = styled.div`
	width: 100%;

	${MQ.S} {
		margin-right: 10px;
		width: 60%;
	}
`

const ImageContainer = styled.div`
	padding: 10px 0;
	width: 100%;
	
	${MQ.S} {
		width: 40%;
	}
`

const Bold = styled.span`
	font-weight: bold;
`

const LinkButton = styled.a`
    background-color: #586d4a;
    border: 1px solid transparent;
	border-radius: 4px;
	color: #fff;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 1px;
	line-height: 1.42857;
	margin-bottom: 0;
    margin-right: 5px;
    outline: none;
    padding: 10px 20px;
    text-transform: uppercase;
    transition: .1s opacity linear;
    text-align: center;
	text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 120px;

	&:hover {
		background-color: #617952;
	}
`

const LinkButtonContainer = styled.div`
	margin-top: 10px;
	text-align: center;
	width: 100%;
`

const descriptionText = `Property Data Generator (PDG) is a free desktop application that allows users to quickly and easy search a list of addresses for property data using Zillow’s Web Services.`
const benefitsText = `The greatest strength of PDG is its speed and universal compatibility. When testing PDG, results for 500 properties were retrieve and formatted in a new spreadsheet in 14 seconds. Also, PDG was designed to be universally compatible. The application is available for download for both macOs and Windows operating systems. Also, the results spreadsheet is autogenerated as a CSV file, ensuring that it can be used with Microsoft Excel, Apple Numbers, Google Sheets, and virtually all other software.`
const technologiesText = `Electron, React, Redux, Express, Mongoose, MongoDB`
const SectionHead = ({ data }) => (
	<SectionHeadWrap id='section-projects'>
		<SectionHeadContainer>
			<TextHeader>
				Projects
			</TextHeader>
			<TextSubHeader>
				<SpanUnderline
					color={COLORS.GREEN_MEDIUM}
				>
					Property Data Generator
				</SpanUnderline>
			</TextSubHeader>
			<DescriptionScreenshot>
				<TextContainer>
					<TextParagraph>
						<Bold>Description:</Bold> {descriptionText}
					</TextParagraph>
					<TextParagraph>
						<Bold>Benefits:</Bold> {benefitsText}
					</TextParagraph>
					<TextParagraph>
						<Bold>Technologies Used:</Bold> {technologiesText}
					</TextParagraph>
				</TextContainer>
				<ImageContainer>
					<ImageFluid
						fluid={data.appScreenshot.childImageSharp.fluid}
						marginXs='0 auto'
						maxWidthXs='400px'
					/>
					<LinkButtonContainer>
						<LinkButton
							href='http://www.propertydatagenerator.com'
							rel='noopener noreferrer'
							target='_blank'
						>
							Download
						</LinkButton>
					</LinkButtonContainer>
				</ImageContainer>
			</DescriptionScreenshot>
		</SectionHeadContainer>
	</SectionHeadWrap>
)

SectionHead.propTypes = {
	data: object.isRequired,
}

export default SectionHead
