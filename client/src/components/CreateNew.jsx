import React, { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { postNewBreed, fetchAllDogs } from "../redux/dogSlice"
import { fetchAllTemperaments } from "../redux/temperamentSlice"
import "../styles/detail.css"
import NavBar from "./NavBar"

const validate = (field) => {
	let err = {}
	const msgRequired = "This field is required!"
	const msgRange = "Range error!"

	err.name = !field.name ? msgRequired : ""
	// height and weight ar required
	err.heightMin = !field.heightMin ? msgRequired : ""
	err.weightMin = !field.weightMin ? msgRequired : ""
	// validate the range
	if (!err.heightMin) {
		err.heightMin = field.heightMin > field.heightMax ? msgRange : ""
	}
	if (!err.weightMin) {
		err.weightMin =
			!err.weightMin && field.weightMin > field.weightMax ? msgRange : ""
	}

	return err
}

export default function CreateNew() {
	const history = useHistory()
	const dispatch = useDispatch()

	// STATE
	const initialState = {
		name: "",
		heightMin: 0,
		heightMax: 0,
		weightMin: 0,
		weightMax: 0,
		lifeSpan: "",
		image: "/assets/placeholder_dog.png",
		bredFor: "",
		temperaments: [],
	}
	const [field, setField] = useState(initialState)
	const [error, setError] = useState({})
	const [loading, setLoading] = useState(false)

	// TEMPERAMENTS
    useEffect(() => {
		dispatch(fetchAllTemperaments())
    }, [dispatch])

	const temperaments = useSelector((state) => state.temperaments.list)
	const options = temperaments
		? temperaments.map((t) => {
				return { label: t.name, value: t.name }
		  })
        : []

	// handle Temperaments behavior
	const handleSelectChange = ({ target }) => {
		// add temperaments to state
		if (!field.temperaments.includes(target.value)) {
			setField((state) => ({
				...state,
				temperaments: [...state.temperaments, target.value],
			}))
		}
	}
	const handleDelTemperament = (name) => {
		setField((state) => ({
			...state,
			temperaments: state.temperaments.filter((t) => t !== name),
		}))
	}

	const handleChange = ({ target }) => {
		setField((state) => ({
			...state,
			[target.name]: target.value,
		}))
	}
	// handle errors
	const handleBlur = () => {
		setError(validate(field))
	}

	// set a random photo to image
	const getRandomImage = async () => {
		setLoading(true)
		const { data } = await axios.get("https://dog.ceo/api/breeds/image/random")
		setField((state) => ({
			...state,
			image: data.message,
		}))
		setLoading(false)
	}

	// SUBMIT
	const handleSubmit = (e) => {
		e.preventDefault()
		setError(validate(field))
		// if no errors submit
		if (Object.values(error).filter((err) => err !== "").length === 0) {
			dispatch(postNewBreed(field))
			alert("submited")
			setField(initialState)
			dispatch(fetchAllDogs())
			history.push("/breeds")
		}
	}

	return (
		<div>
			<NavBar search={false} />

			<div className='detail'>
				<div className='card-img'>
					<img src={field.image} alt='Load one...' />
					<button type='button' onClick={getRandomImage}>
						{loading ? "Loading..." : "Load random photo"}
					</button>
				</div>
				<div className='card-info'>
					<div className='card-text'>
						<h1>Create your breed</h1>
						<form onSubmit={handleSubmit}>
							<div>
								<label>Name:</label>
								<input
									type='text'
									value={field.name}
									name='name'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								{error.name && <span> {error.name}! </span>}
							</div>
							<div>
								<label>
									Weight: {field.weightMin} - {field.weightMax}
								</label>
								<input
									type='range'
									value={field.weightMin}
									name='weightMin'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								<input
									type='range'
									value={field.weightMax}
									min={field.weightMin}
									name='weightMax'
									onBlur={handleBlur}
									onChange={handleChange}
									disabled={field.weightMin === 0}
								/>
								{error.weightMin && <span> {error.weightMin}! </span>}
							</div>
							<div>
								<label>
									Height: {field.heightMin} - {field.heightMax}
								</label>
								<input
									type='range'
									value={field.heightMin}
									name='heightMin'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								<input
									type='range'
									value={field.heightMax}
									min={field.heightMin}
									name='heightMax'
									onBlur={handleBlur}
									onChange={handleChange}
									disabled={field.heightMin === 0}
								/>
								{error.heightMin && <span> {error.heightMin}! </span>}
							</div>
							<div>
								<label>Life Span</label>
								<input
									type='text'
									value={field.lifeSpan}
									name='lifeSpan'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label>Bred For</label>
								<input
									type='text'
									value={field.bredFor}
									name='bredFor'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label>Temperaments</label>
								<select name='selectTemperament' onChange={handleSelectChange}>
									<option key='0' value='0'>
										Select Temperament...
									</option>
									{options.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
								<div>
									{field.temperaments.length &&
										field.temperaments.map((t) => (
											<div key={t}>
												{t}{" "}
												<button onClick={() => handleDelTemperament(t)}>
													X
												</button>
											</div>
										))}
								</div>
                            </div>
                            <div className='card-btn'>
						<button type='submit'>
							Save
						</button>
						<button type='button' onClick={() => history.goBack()}>
							Cancel
						</button>
					</div>
						</form>
					</div>

				</div>
			</div>
		</div>
	)
}
