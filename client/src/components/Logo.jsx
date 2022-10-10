import React from "react"
import styled from "styled-components"

export default function Logo() {

	return (
		<LogoContainer>
			<a href='/breeds'>
				<img alt='.' src='/assets/logotemp.png' />
				<span>Breeds</span>
            </a>
		</LogoContainer>
	)
}

const LogoContainer = styled.div`
	a {
		text-decoration: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		img {
			width: 100px;
		}
		span {
			font-family: "Lobster", serif;
			font-size: 36px;
			padding-left: 10px;
			color: #474747;
		}
	}
`
