import React from "react"
import { useHistory  } from "react-router-dom"
import NavBar from "./NavBar"

export default function CreateNew() {

    const history = useHistory()
	return (
		<div>
			<NavBar />
			<h1>Create new breed</h1>
            <button onClick={() => history.goBack()} > Return </button>
		</div>
	)
}
