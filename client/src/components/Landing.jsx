import React from "react"
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
export default function Landing() {
    const history = useHistory()
    const handleClick = () => {
        history.push('/breeds')
    }
	return (
		<LandingContainer>
			<Intro>
				<h1>Dogs Breeds</h1>

				<div class='box-1' onClick={handleClick}>
					<div class='btn btn-one'>
						<span>START</span>
					</div>
				</div>
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
	position: absolute;
	background-color: rgb(255, 255, 255, 0.1);
	font-family: "Lobster", serif;
	backdrop-filter: blur(1px);
	color: #ffffff;
	font-size: 24px;
	bottom: 15%;
	left: 15%;
	padding: 30px;
	border-radius: 5px;
	h1 {
		margin: 10px 10px 20px;
	}
	.btn {
		line-height: 50px;
		height: 50px;
		text-align: center;
		width: 250px;
		cursor: pointer;
        font-family: 'Epilogue';
	}
	.btn-one {
		color: #fff;
		transition: all 0.3s;
		position: relative;
	}
	.btn-one span {
		transition: all 0.3s;
	}
	.btn-one::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		opacity: 0;
		transition: all 0.3s;
		border-top-width: 1px;
		border-bottom-width: 1px;
		border-top-style: solid;
		border-bottom-style: solid;
		border-top-color: rgba(255, 255, 255, 0.5);
		border-bottom-color: rgba(255, 255, 255, 0.5);
		transform: scale(0.1, 1);
	}
	.btn-one:hover span {
		letter-spacing: 2px;
	}
	.btn-one:hover::before {
		opacity: 1;
		transform: scale(1, 1);
	}
	.btn-one::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		transition: all 0.3s;
		background-color: rgba(255, 255, 255, 0.1);
	}
	.btn-one:hover::after {
		opacity: 0;
		transform: scale(0.1, 1);
	}

`
