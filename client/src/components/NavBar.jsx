import React from "react"
import SearchForm from "./SearchForm"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import styled from "styled-components"
//redux
import { clearDogs } from "../redux/dogSlice"
import { clearTemperaments } from "../redux/temperamentSlice"
import { useDispatch } from "react-redux"

function NavBar({ search }) {
	const dispatch = useDispatch()
	const handleLogOut = () => {
		dispatch(clearTemperaments())
		dispatch(clearDogs())
	}

	return (
		<Navigation>
			<Logo />

			{search && (
				<>
					<SearchForm />
					<NavLink to='/newBreed'>
						Create your Breed
					</NavLink>
				</>
			)}

			<NavLink to='/' onClick={handleLogOut}>
				Landing Page
			</NavLink>
		</Navigation>
	)
}

export default NavBar

const Navigation = styled.div`
	font-family: "Epilogue";
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100px;
	justify-content: space-between;
	overflow: hidden;
	background-color: #fff;
	padding: 0 50px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
	font-size: 16px;
`
const NavLink = styled(Link)`
	position: relative;
	display: block;
	text-decoration: none;
	transition: 0.5s;
	color: #555;
	&::after {
		position: absolute;
		content: "";
		top: 100%;
		left: 0;
		width: 100%;
		height: 3px;
		background: #6dc264;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.5s;
	}
	&:hover {
		color: #95a5a6;
	}
	&:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}
`
