import React from "react"
import { Link } from "react-router-dom"

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

	return (
		<article style={styles.article}>
			<div>
				<Link to={`/detail/${id}`} >
					<div style={styles.photo}></div>
					<div>{name}</div>
				</Link>
				<div>{bredFor}</div>
			</div>
		</article>
	)
}
