// external dependencies
import React from 'react'
import styled from '@emotion/styled'
import { object } from 'prop-types'
import linkedInSvg from '../../images/linked.svg'

// constants
import {
	COLORS,
	FONT_SIZES,
	MAX_SECTION_WIDTH,
	sectionContainer,
} from '../../utils/styleHelpers'
import {
	FOOTER_TEXT_DATA,
} from '../../utils/contentData'

// styled components
const FooterContainer = styled.div`
	${sectionContainer};
	height: 100%;
	margin: 0 auto;
	max-width: ${MAX_SECTION_WIDTH};
	width: 100%;
`

const FooterBackground = styled.div`
	background: ${COLORS.GREEN_MEDIUM};
	width: 100%;
`

const FooterTextContainer = styled.div`
	color: ${COLORS.WHITE};
	font-size: 14px;
	margin: 10px auto 0 auto;
	max-width: 700px;
	text-align: center;
`

const Link = styled.a`
	text-decoration: none;
	margin: 5px;
`

const LinkContainer = styled.div`
	text-align: center;

	svg {
		fill: #fff;

		&:hover {
			opacity: .8; 
		}
	}
`

const LinkedInSvg = ({fill}) => (
	<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 24 24' style={{fill}}>
    <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z'
    />
</svg>
)

const GitHubSvg = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652   1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"></path></svg>
)

const Footer = ({ data }) => {
	const year = new Date().getFullYear()

	return (
		<FooterBackground>
			<FooterContainer>
				<LinkContainer>
					<Link href="https://www.linkedin.com/in/steve-wisner" target="_blank">
						<LinkedInSvg />
					</Link>
					<Link href="https://github.com/spwisner" target="_blank">
						<GitHubSvg />
					</Link>
				</LinkContainer>
				<FooterTextContainer>
					&copy; {year} Steve Wisner
				</FooterTextContainer>
			</FooterContainer>
		</FooterBackground>
	)
}

Footer.propTypes = {
	data: object.isRequired,
}

export default Footer
