import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Logo() {
	return (
		<LogoContainer>
			<Link to='/breeds'>
				<img alt='.' src='/assets/logotemp.png' />
				<span>Dogs Breeds</span>
			</Link>
		</LogoContainer>
	)
}

const LogoContainer = styled.div`
	font-weight: 400;
	font-size: 1.5rem;
	& a {
		text-decoration: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		& img {
			width: 100px;
		}
	}
`
