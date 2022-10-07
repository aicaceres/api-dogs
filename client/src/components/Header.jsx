import React from "react"
import styled from "styled-components"
// redux
import { getBySource, setOrder } from "../redux/dogSlice"
import { setSelected } from "../redux/temperamentSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Header() {
	const dispatch = useDispatch()
	const { source } = useSelector((state) => state.dogs)
	const { order } = useSelector((state) => state.dogs)

	const handleOrder = (e) => {
		const { name: type, value: direction } = e.currentTarget
		dispatch(setOrder({ type, direction }))
	}

	const handleSourceFilter = (source) => {
		dispatch(getBySource(source))
		dispatch(setSelected(0))
	}

	return (
		<HeaderContainer>
			<div>
				<h1>DOGS</h1>
			</div>

			<div>
				<label>Select source:</label>

				<label className='radio-input'>
					<input
						type='radio'
						name='source'
						value='ALL'
						checked={source === "ALL"}
						onChange={() => handleSourceFilter("ALL")}
						onClick={() => handleSourceFilter("ALL")}
					/>
					All
					<i></i>
				</label>
				<label className='radio-input'>
					<input
						type='radio'
						name='source'
						value='API'
						checked={source === "API"}
						onChange={() => handleSourceFilter("API")}
					/>
					API
					<i></i>
				</label>
				<label className='radio-input'>
					<input
						type='radio'
						name='source'
						value='DB'
						checked={source === "DB"}
						onChange={() => handleSourceFilter("DB")}
					/>
					Yours
					<i></i>
				</label>
			</div>

			<div>
				<button
					title='Alphabetic order'
					name='ALPHABETIC'
					value={order["ALPHABETIC"] === "ASC" ? "DESC" : "ASC"}
					onClick={handleOrder}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						width={20}
						height={20}
					>
						<path d={orderSvg[order["ALPHABETIC"]]} clipRule='evenodd' />
					</svg>
					<span>Alphabetic</span>
				</button>

				<button
					title='Order by weight'
					name='WEIGHT'
					value={order["WEIGHT"] === "ASC" ? "DESC" : "ASC"}
					onClick={handleOrder}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						width={20}
						height={20}
					>
						<path d={orderSvg[order["WEIGHT"]]} clipRule='evenodd' />
					</svg>
					<span>Weight</span>
				</button>
			</div>
		</HeaderContainer>
	)
}
// SVG icons for sort
const orderSvg = {
	ASC: "M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z",
	DESC: "M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z",
}

// Styled component
const HeaderContainer = styled.div`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 10px 80px;
	& button {
		border: none;
		margin: 4px;
		padding: 10px;
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		& span {
			margin-left: 2px;
		}
	}

	.radio-input {
		position: relative;
		padding: 3px 0px 0px 42px;
		display: inline;
		input {
			appearance: none;
			-webkit-appearance: none;
			-moz-appearance: none;
			visibility: hidden;
			position: absolute;
			right: 0;
			&:checked + i:before {
				transform: scale(1);
				opacity: 1;
			}
			& + i {
				background: #f0f0f0;
				border: 2px solid rgba(0, 0, 0, 0.2);
				position: absolute;
				left: 0;
				top: 0;
				height: 20px;
				width: 20px;
				border-radius: 100%;
				left: 15px;
				&:before {
					content: "";
					display: inline;
					height: 16px;
					width: 16px;
					border-radius: 100%;
					position: absolute;
					z-index: 1;
					top: 2px;
					left: 2px;
					background: #2ac176;
					transition: all 0.25s ease;
					transform: scale(0);
					opacity: 0;
				}
			}
		}
	}
`
