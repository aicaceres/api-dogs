import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

// reducer
import { clearDetail, searchById } from "../redux/dogSlice"

export default function Article({ id, name, bredFor, image }) {
	const styles = {
		article: {},
		photo: {
			backgroundImage: "url(" + image + ")",
			backgroundSize: "cover",
			backgroundPosition: "center",
			width: "200px",
			height: "200px",
		},
	}

	const dispatch = useDispatch()

	const handleOnClick = (id) => {
		dispatch(clearDetail())
		dispatch(searchById(id))
	}

	return (
		<article style={styles.article}>
			<div>
				<Link to='/detail' onClick={() => handleOnClick(id)}>
					<div style={styles.photo}></div>

					<div>{name}</div>
				</Link>
				<div>{bredFor}</div>
			</div>
		</article>
	)
}
