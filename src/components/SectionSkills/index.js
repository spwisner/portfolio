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
import LanguageGallery from '../LanguageGallery'

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
	color: #323e29;
	font-size: 30px;
	padding: 10px 0;
	width: 100%;
`

const TextSubHeader = styled.div`
	color: #22211f;
	font-size: 24px;
	padding: 10px 0;
	width: 100%;
`

const SectionSkills = ({ data }) => (
	<SectionHeadWrap id='section-skills'>
		<SectionHeadContainer>
			<TextHeader>
					Skills
			</TextHeader>
			<TextSubHeader>
					Languages &amp; Technologies
			</TextSubHeader>
			<LanguageGallery
				data={data}
			/>
		</SectionHeadContainer>
	</SectionHeadWrap>
)

SectionSkills.propTypes = {
	data: object.isRequired,
}

export default SectionSkills
