import React from "react"
import NavBar from "./NavBar"
import Articles from "./Articles"
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

                <Articles />
                
			</section>
		</>
	)
}
