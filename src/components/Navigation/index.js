/* eslint-disable */
import React, { Component } from 'react'
import styled from '@emotion/styled'

import { COLORS, MQ } from '../../utils/styleHelpers'

const NavWrap = styled.div`
	background: ${COLORS.GREEN_MEDIUM};
	color: ${COLORS.WHITE};
	display: flex;
	height: 50px;
	width: 100%;
	padding: 0 20px;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 9;

	${MQ.M} {
		position: static;
	}
`

const NavContainer = styled.div`
	align-items: center;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
`

const LogoContainer = styled.div`
	font-size: 26px;
`

const logo = `<SW>`

const ButtonLink = styled.button`
    background: none!important;
	color:inherit;
	cursor: pointer;
	border:none; 
	font: inherit;
	outline: none;
	padding: 0!important;

	&:hover {
		border-bottom: 1px solid ${COLORS.WHITE};
	}
`

class Navigation extends Component {
	handleClick = (idValue) => {
		document.getElementById(idValue).scrollIntoView(true)
	}

	render() {
		return (
			<NavWrap>
				<NavContainer>
					<ButtonLink data-id='home' onClick={() => this.handleClick('section-home')}>Home</ButtonLink>
					<ButtonLink data-id='about' onClick={() => this.handleClick('section-about')}>About</ButtonLink>
					<LogoContainer>{logo}</LogoContainer>
					<ButtonLink data-id='skills' onClick={() => this.handleClick('section-skills')}>Skills</ButtonLink>
					<ButtonLink data-id='projects' onClick={() => this.handleClick('section-projects')}>Projects</ButtonLink>
				</NavContainer>
			</NavWrap>
		)
	}
}

export default Navigation
