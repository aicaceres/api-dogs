import React from "react"
import styled from "styled-components"

export default function ErrorMessage({ msg }) {
	return <Message>{msg}</Message>
}

const Message = styled.label`
	bottom: 50px;
	position: absolute;
	background-color: indianred;
	color: white;
	font-size: 12px;
	padding: 10px;
	z-index: 9;
	left: 0;
	text-align: center;
	width: 100%;
`
