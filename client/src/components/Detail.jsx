import React, { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import NavBar from "./NavBar"
import Loading from "./Loading"
import "../styles/detail.css"
// redux
import { useDispatch, useSelector } from "react-redux"
import { clearDetail, searchById } from "../redux/dogSlice"

const styles = {
	layout: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}

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
    let weightTxt = ' - - '
    if (dog.weightMin && dog.weightMax) {
        weightTxt = dog.weightMin + ' - ' + dog.weightMax + ' Kg'
    }else{
        if ((dog.weightMin && !dog.weightMax) || (!dog.weightMin && dog.weightMax)) {
            weightTxt = ((dog.weightMin) ? dog.weightMin : dog.weightMax ) + ' Kg'
        }
    }
    //text for height
    let heightTxt = ' - - '
    if (dog.heightMin && dog.heightMax) {
        heightTxt = dog.heightMin + ' - ' + dog.heightMax + ' Cm'
    }else{
        if ((dog.heightMin && !dog.heightMax) || (!dog.heightMin && dog.heightMax)) {
            heightTxt = ((dog.heightMin) ? dog.heightMin : dog.heightMax ) + ' Cm'
        }
    }

	return (
		<div>
			<NavBar search={false}/>

			{loading ? (
				<Loading />
			) : (
				<div className='detail'>
					<div className='card-img'>
						<img src={dog.image} alt={dog.name} />
					</div>
					<div className='card-info'>
						<div className='card-text'>
							<h1>{dog.name}</h1>
							<h2>
								<strong>Bred for: </strong> {dog.bredFor}
							</h2>

							<div className='card-temperament'>
                                    <h2><strong>Temperament:</strong></h2>
                                    <p>
                                        {dog.temperament &&
											dog.temperament.map((t) => t + ', ')}
                                    </p>

                                    <p>
                                        Weight: { weightTxt }
                                    </p>
                                    <p>
                                        Height: { heightTxt }
                                    </p>
                                    <p>
                                        Life Span: { dog.lifeSpan }
                                    </p>
							</div>
						</div>
						<div className='card-btn'>
							<button type='button' onClick={() => history.push("/breeds")}>
								Return
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
