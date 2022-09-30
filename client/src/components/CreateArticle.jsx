import React from "react"
import { Link } from "react-router-dom"
import NavBar from "./NavBar"

export default function CreateArticle() {
	return (
		<div>
			<NavBar />
			<h1>Create new breed</h1>
			<Link to='/breeds'>Return</Link>
		</div>
	)
}
