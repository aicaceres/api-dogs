import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function NotFound404() {
	return (
		<Empty>
            <h2>Ups! something go wrong</h2>
            <h3><Link to='/breeds'>Back to home</Link> </h3>
			<img alt='looking...' src='/assets/loading-ballon.gif' />
		</Empty>
	)
}

const Empty = styled.div`
	width: 100%;
	text-align: center;
	img {
		width: 400px;
		border-radius: 5px;
	}
`
