import React from "react"
import styled from "styled-components"
export default function EmptyData() {
	return (
		<Empty>
			<h3>There're no breeds with this criteria... </h3>
			<h2>Create your own!</h2>
			<img alt='looking...' src='/assets/loading-smell.gif' />
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
