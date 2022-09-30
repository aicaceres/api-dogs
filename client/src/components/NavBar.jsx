import React from "react"
import SearchForm from "./SearchForm"
import { Link } from "react-router-dom"
import Logo from "./Logo"

const styles = {
	navbar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		height: "100px",
		justifyContent: "space-between",
		overflow: "hidden",
		backgroundColor: "#fff",
		padding: "0 50px",
		boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
	},
	close: {
		textDecoration: "none",
	},
}

function NavBar() {
	return (
		<header>
			<nav style={styles.navbar}>
				<Logo />

				<SearchForm />

				<Link to='/newBreed' style={styles.close}>
					Create your Breed
				</Link>

				<Link to='/' style={styles.close}>
					LandingPage
				</Link>
			</nav>
		</header>
	)
}

export default NavBar
