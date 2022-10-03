import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "./Landing.css"

// redux
// import { clearDogs } from "../redux/dogSlice"
// import { clearTemperaments } from "../redux/temperamentSlice"
// import { useDispatch } from "react-redux"

export default function Landing() {
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(clearDogs())
	// 	dispatch(clearTemperaments())
	// }, [dispatch])
	return (
		<div className='landing'>
			<div className='intro'>
				<h1>Dogs Breeds</h1>
				<Link
					to='/breeds'
					style={{
						textDecoration: "none",
						fontWeight: "700",
					}}
				>
					<span
						style={{
							position: "relative",
							top: "-8px",
							padding: "10px",
							color: "white",
							fontSize: "25px",
						}}
					>
						START
					</span>
				</Link>
			</div>
		</div>
	)
}
