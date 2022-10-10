import React, { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import styled from "styled-components"
import NavBar from "./NavBar"
import Loading from "./Loading"
import ErrorMessage from "./ErrorMessage"
import EmptyData from "./EmptyData"
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

	const { detail: dog, loading, status } = useSelector((state) => state.dogs)

	//format text for weight
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
	//format text for height
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

			) : !dog.name ? (
				status === 'OK' || status === '' ? <EmptyData /> : <ErrorMessage msg={status} />
			) : (
				<CardDetail>
					<div className='card-img'>
						<img src={dog.image} alt={dog.name} />
					</div>
					<div className='card-body'>
						<div className='card-info'>
							<h1>{dog.name}</h1>
							<h2>
								<span>Bred for: </span> {dog.bredFor}
							</h2>

							<div className='card-aditional'>
								<div className='card-data'>
									<div>
										<h3>Weight</h3> {weightTxt}
									</div>
									<div>
										<h3>Height</h3> {heightTxt}
									</div>
									<div>
										<h3>Life Span</h3> {dog.lifeSpan}
									</div>
								</div>
								<div className='card-temperament'>
									<h2>
										<span>Temperament:</span>
									</h2>
									{dog.temperament &&
										dog.temperament.map((t) => (
											<span className='temperament-tag' key={t}>
												{t}
											</span>
										))}
								</div>
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
		position: relative;
		.del-card {
			position: absolute;
			cursor: pointer;
			background-color: red;
			color: white;
			padding: 5px 10px;
			right: 20px;
		}
		.card-info {
			height: 330px;
			width: 100%;
			h1 {
				font-family: "Lobster", serif;
				font-size: 34px;
				color: #474747;
				white-space: nowrap;
			}
			h2 {
				font-size: 13px;
				font-family: "Raleway", sans-serif;
				font-weight: 400;
				text-transform: uppercase;
				color: #8d8d8d;
				letter-spacing: 0.15em;
				line-height: 1.6em;
				margin: 0;
				min-height: 40px;
				span {
					color: #777;
					font-weight: 600;
				}
			}
			.card-aditional {
				height: 210px;
				color: #8d8d8d;
				line-height: 1.5em;
				font-size: 15px;
				overflow: hidden;
				.card-data {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					aling-items: center;
					padding: 10px 0;
					margin-bottom: 10px;
					gap: 1rem;
					h3 {
						margin-bottom: 10px;
					}
					div {
						display: block;
						text-align: center;
						width: 100%;
						border: 3px solid powderblue;
						border-radius: 5%;
						padding-bottom: 10px;
					}
				}
				.card-temperament {
					h2 {
						min-height: 26px;
					}
					.temperament-tag {
						font-size: 11px;
						text-transform: uppercase;
						padding: 2px 15px;
						margin: 3px 5px 3px 0;
						background-color: powderblue;
						display: inline-block;
						position: relative;
						color: #777;
						letter-spacing: 0.1em;
					}
				}
			}
		}
		.card-btn {
			width: 84%;
			display: flex;
			justify-content: center;
			position: absolute;
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
