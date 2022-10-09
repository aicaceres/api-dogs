import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

// reducers
import { setSelected, fetchAllTemperaments } from "../redux/temperamentSlice"
import { getByTemperament, searchByName, setSource } from "../redux/dogSlice"

export default function Search() {
	const dispatch = useDispatch()
	const temperaments = useSelector((state) => state.temperaments.list)
	const selected = useSelector((state) => state.temperaments.selected)
	// search input
	const [input, setInput] = useState("")
	const handleInput = ({ target }) => {
		setInput(target.value)
	}
	const handleSearch = (e) => {
		e.preventDefault()
		dispatch(searchByName(input))
		setInput("")
	}

	// select temperaments
	const options = temperaments.length
		? temperaments.map((t) => {
				return { label: t.name, value: t.name }
		  })
		: []
	const selectHandleOnChange = ({ target }) => {
		dispatch(setSelected(target.value))
        dispatch(getByTemperament(target.value))
        dispatch(setSource('ALL'))
	}

	useEffect(() => {
		dispatch(fetchAllTemperaments())
	}, [dispatch])

	return (
		<SearchBar>
			<form>
				<input
					type='text'
					className='search_input'
					placeholder='Search by name...'
					onChange={handleInput}
					value={input}
				/>
				<button className='search_button' type='submit' onClick={handleSearch}>
					<svg className='search_icon' aria-hidden='true' viewBox='0 0 24 24'>
						<path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
					</svg>
				</button>
			</form>
			<div className='search_select'>
				<label>
					<select onChange={selectHandleOnChange} value={selected}>
						<option key='0' value='0'>
							Select Temperament...
						</option>
						{options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</label>
			</div>
		</SearchBar>
	)
}

// styled components
const SearchBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	.search_input {
		font-family: sans-serif;
		font-size: 14px;
		background-color: #f4f2f2;
		border: none;
		color: #888;
		padding: 0.7rem 1rem;
		border-radius: 30px 0 0 30px;
		width: 14em;
		transition: all ease-in-out 0.5s;
		margin-right: -2rem;
		&:hover,
		:focus {
			box-shadow: 0 0 0.3em #00000013;
		}
		&:focus {
			outline: none;
			background-color: #f0eeee;
		}
	}
	.search_button {
		border: none;
		background-color: #f4f2f2;
		&:hover {
			cursor: pointer;
		}
		.search_icon {
			height: 1.3em;
			width: 1.3em;
			fill: #b4b4b4;
		}
	}
	.search_select {
		position: relative;
		float: left;
		min-width: 200px;
		margin: 8px;
		&:after {
			content: ">";
			font: 24px "Consolas", monospace;
			color: #b4b4b4;
			-webkit-transform: rotate(90deg);
			-moz-transform: rotate(90deg);
			-ms-transform: rotate(90deg);
			transform: rotate(90deg);
			right: 12px;
			top: 10px;
			padding: 0 0 2px;
			position: absolute;
			pointer-events: none;
		}
		select {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			outline: none;
			scroll-behavior: smooth;
			display: block;
			width: 100%;
			max-width: 320px;
			height: 38px;
			float: right;
			margin: 5px 0px;
			padding: 0px 16px;
			font-size: 14px;
			line-height: 1.75;
			color: #888;
			background-color: #f4f2f2;
			background-image: none;
			border: none;
			-ms-word-break: normal;
			word-break: normal;
			border-radius: 0 30px 30px 0;
			transition: all ease-in-out 0.5s;
			&:hover,
			:focus {
				box-shadow: 0 0 0.3em #00000013;
			}
		}
	}
`
