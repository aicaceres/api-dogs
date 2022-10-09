import React, { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import styled from "styled-components"
import NavBar from "./NavBar"
import Loading from "./Loading"
// redux
import { useDispatch, useSelector } from "react-redux"
import { clearDetail, searchById } from "../redux/dogSlice"

export default function Detail() {
	const dispatch = useDispatch()
	const { id } = useParams()
	const history = useHistory()

	useEffect(() => {
		dispatch(searchById(id))
		return () => {
			dispatch(clearDetail())
		}
	}, [dispatch, id])

	const { detail: dog, loading } = useSelector((state) => state.dogs)

	//text for weight
	let weightTxt = " - - "
	if (dog.weightMin && dog.weightMax) {
		weightTxt = dog.weightMin + " - " + dog.weightMax + " Kg"
	} else {
		if (
			(dog.weightMin && !dog.weightMax) ||
			(!dog.weightMin && dog.weightMax)
		) {
			weightTxt = (dog.weightMin ? dog.weightMin : dog.weightMax) + " Kg"
		}
	}
	//text for height
	let heightTxt = " - - "
	if (dog.heightMin && dog.heightMax) {
		heightTxt = dog.heightMin + " - " + dog.heightMax + " Cm"
	} else {
		if (
			(dog.heightMin && !dog.heightMax) ||
			(!dog.heightMin && dog.heightMax)
		) {
			heightTxt = (dog.heightMin ? dog.heightMin : dog.heightMax) + " Cm"
		}
	}

	return (
		<div>
			<NavBar search={false} />

			{loading ? (
				<Loading />
			) : (
				<CardDetail>
					<div className='card-img'>
						<img src={dog.image} alt={dog.name} />
					</div>
					<div className='card-body'>
						<div className='card-info'>
							<h1>{dog.name}</h1>
							<h2>
								<strong>Bred for: </strong> {dog.bredFor}
							</h2>

							<div className='card-aditional'>
								<h2>
									<strong>Temperament:</strong>
								</h2>
								<p>{dog.temperament && dog.temperament.map((t) => t + ", ")}</p>

								<p>Weight: {weightTxt}</p>
								<p>Height: {heightTxt}</p>
								<p>Life Span: {dog.lifeSpan}</p>
							</div>
						</div>
						<div className='card-btn'>
							<button type='button' onClick={() => history.push("/breeds")}>
								Return
							</button>
						</div>
					</div>
				</CardDetail>
			)}
		</div>
	)
}

const CardDetail = styled.div`
	display: flex;
	width: 80%;
	margin: 40px auto;
	border-radius: 5px;
	box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.15);
	background-color: #fff;
	.card-img {
		width: 55%;
		display: flex;
		height: 430px;
		img {
			width: 100%;
			object-fit: cover;
			border-radius: 5px 0 0 5px;
		}
	}
	.card-body {
		height: 370px;
		width: 45%;
		padding: 20px 40px;
		border-radius: 0 5px 0px 5px;
		background-color: #fff;
		.card-info {
			min-height: 280px;
			width: 100%;
			h1 {
				font-family: "Bentham", serif;
				font-size: 34px;
				color: #474747;
			}
			h2 {
				font-size: 13px;
				font-family: "Raleway", sans-serif;
				font-weight: 400;
				text-transform: uppercase;
				color: #8d8d8d;
				letter-spacing: 0.15em;
				line-height: 1.5em;
			}
			.card-aditional {
				height: 210px;
				color: #8d8d8d;
				line-height: 1.5em;
				font-size: 15px;
				overflow: hidden;
			}
		}
		.card-btn {
			width: 100%;
			margin-top: 17px;
			display: flex;
			justify-content: center;
			button {
				height: 40px;
				width: 176px;
				box-sizing: border-box;
				border: transparent;
				font-family: "Raleway", sans-serif;
				font-size: 14px;
				font-weight: 500;
				text-transform: uppercase;
				letter-spacing: 0.2em;
				color: #ffffff;
				background-color: #6dc264;
				cursor: pointer;
				outline: none;
				&:hover {
					background-color: #a6d4a0;
				}
			}
		}
	}
`
