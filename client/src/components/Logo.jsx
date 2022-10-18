import React from "react"
import styled from "styled-components"

export default function Logo() {

	return (
		<Container>
			<a href='/breeds'>
				<img alt='.' src='/assets/logo.png' />
				<span>Breeds</span>
            </a>
		</Container>
	)
}

const Container = styled.div`
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
