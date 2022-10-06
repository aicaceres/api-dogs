import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Landing() {
	return (
		<LandingContainer>
			<Intro>
				<h1>Dogs Breeds</h1>

				<Link to='/breeds'>
					<span>START</span>
				</Link>
			</Intro>
		</LandingContainer>
	)
}

// Styled components
const LandingContainer = styled.div`
	background-image: url("../../assets/landing.avif");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 100vh;
	position: relative;
`
const Intro = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #ffffff;
	& a {
		text-decoration: none;
		font-weight: 700;
		& span {
			color: #ffffff;
			font-size: 25px;
		}
	}
`
