import React from "react"
import SearchForm from "./SearchForm"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import styled from "styled-components"
//redux
import { clearDogs } from "../redux/dogSlice"
import { clearTemperaments } from "../redux/temperamentSlice"
import { useDispatch } from "react-redux"

function NavBar() {
	const dispatch = useDispatch()
	const handleClearAll = () => {
		dispatch(clearTemperaments())
		dispatch(clearDogs())
	}

	return (
		<Navigation>
			<Logo />

			<SearchForm />

			<Link to='/newBreed'>CREATE YOUR BREED</Link>

			<Link to='/' onClick={handleClearAll}>
				LANDING PAGE
			</Link>
		</Navigation>
	)
}

export default NavBar

const Navigation = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100px;
	justify-content: space-between;
	overflow: hidden;
	background-color: #fff;
	padding: 0 50px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
	font-size: 14px;
	& a {
		text-decoration: none;
	}
`
