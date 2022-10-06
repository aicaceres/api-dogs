import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Item({
	id,
	name,
	weightMin,
	weightMax,
	image,
	temperament,
}) {
	return (
		<Card>
			<Link to={`/detail/${id}`}>
				<div className='card'>
					<div className='card-header'>
						<img src={image} alt={name} loading='lazy' />
					</div>
					<div className='card-body'>
						<h4>{name}</h4>
						<p>
							{temperament &&
								temperament
									.slice(0, 3)
									.map((t, i) => <span key={t}>{i === 2 ? t : t + ", "}</span>)}
						</p>
					</div>
					<div className='tag'>
						<span>
							WEIGHT: {weightMin} - {weightMax} Kg.
						</span>
					</div>
				</div>
			</Link>
		</Card>
	)
}

//Styled components
const Card = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	&:hover {
		transition: all 400ms ease-in-out;
		transform: scale(1.05);
	}
	a:link,
	a:visited,
	a:active {
		text-decoration: none;
		color: inherit;
	}
	.card {
		margin: 10px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		width: 250px;
		.card-header img {
			width: 100%;
			height: 200px;
			object-fit: cover;
			object-position: top;
		}
		.card-body {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			padding: 0 20px;
			min-height: 80px;
			h4 {
				margin: 0 0 5px;
			}
			p {
				font-size: 13px;
				margin: 0 0 15px;
			}
		}
		.tag {
			width: 100%;
			min-height: 30px;
			color: white;
			background-color: grey;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			& span {
				font-size: 12px;
				margin: 0;
				padding: 0 8px 0 0;
				text-transform: uppercase;
			}
		}
	}
`
