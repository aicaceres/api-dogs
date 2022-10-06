import React from "react"
import NavBar from "./NavBar"
import Items from "./Items"
import Header from "./Header"
import styled from "styled-components"

export default function Home() {
	return (
		<>
			<NavBar />

			<Layout>
				<Header />
				<Items />
			</Layout>
		</>
	)
}
// Styled component
const Layout = styled.section`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin-top: 10px;
`
