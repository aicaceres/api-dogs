import React from "react"
import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import Loading from "./Loading"

import { useSelector } from "react-redux"

const styles = {
	layout: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}

export default function ArticleDetail() {
	const { detail: dog, loading } = useSelector((state) => state.dogs)

	return (
		<div>
			<NavBar />

			<div style={styles.layout}>
				{loading ? <Loading /> : ""}
				<h1>{dog.name}</h1>
				<img alt={dog.name} src={dog.image} loading='lazy' />
				<Link to='/breeds'> Return </Link>
			</div>
		</div>
	)
}
