import React from "react"
import styled from "styled-components"
import { Sort } from "./SvgIcons"
// redux
import { getBySource, getByOrden } from "../redux/dogSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Header() {
	const dispatch = useDispatch()
	const { source, order, searchName } = useSelector((state) => state.dogs)

	const handleOrder = ({ currentTarget }) => {
		const newOrder = {}
		newOrder[currentTarget.name] = currentTarget.value
		dispatch(getByOrden(newOrder))
	}

	const handleSourceFilter = (source) => {
		dispatch(getBySource(source))
	}

	return (
		<Container>
			<div>
				<h1>
					DOGS
					{searchName ? <span> [ {searchName} ]</span> : ""}
				</h1>
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
                    className={order.ALPHABETIC ? 'active' : '' }
					value={order["ALPHABETIC"] === "ASC" ? "DESC" : "ASC"}
					onClick={handleOrder}
				>
					<Sort order={order["ALPHABETIC"]} />
					<span>Alphabetic</span>
				</button>

				<button
					title='Order by weight'
                    name='WEIGHT'
                    className={order.WEIGHT ? 'active' : '' }
					value={order["WEIGHT"] === "ASC" ? "DESC" : "ASC"}
					onClick={handleOrder}
				>
					<Sort order={order["WEIGHT"]} />
					<span>Weight</span>
				</button>
			</div>
		</Container>
	)
}

// Styled component
const Container = styled.div`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 10px 80px;
	button {
		border: none;
		margin: 4px;
		padding: 10px;
		display: inline-flex;
		align-items: center;
		cursor: pointer;
        color:grey;
        &.active{
            color:inherit;
        }
		span {
			margin-left: 2px;
		}
	}

	.radio-input {
		font-family: "Epilogue";
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
