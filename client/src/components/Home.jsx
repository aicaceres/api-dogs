import React from "react"
import NavBar from "./NavBar"
import Items from "./Items"
import Header from "./Header"

const styles = {
	layout: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}

export default function Home() {
	return (
		<>
			<NavBar />

            <section style={styles.layout}>

                <Header />

                <Items />

			</section>
		</>
	)
}
