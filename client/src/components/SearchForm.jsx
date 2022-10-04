import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../styles/SearchForm.css"

// reducers
import { setSelected, fetchAllTemperaments } from "../redux/temperamentSlice"
import { getByTemperament, searchByName } from "../redux/dogSlice"

export default function Search() {
	const dispatch = useDispatch()
	const temperaments = useSelector((state) => state.temperaments.list)
    const selected = useSelector((state) => state.temperaments.selected)
    // search input
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchByName(input))
        setInput('')
    }

    // select temperaments
	const options = temperaments
		? temperaments.map((t) => {
				return { label: t.name, value: t.name }
		  })
		: []
	const selectHandleOnChange = (e) => {
		dispatch(setSelected(e.target.value))
		dispatch(getByTemperament(e.target.value))
	}

	useEffect(() => {
		dispatch(fetchAllTemperaments())
	}, [dispatch])

	return (
        <div className='search'>
            <form>
                <input
                    type='text'
                    className='search__input'
                    placeholder='Search a breed...'
                    onChange={handleInput}
                    value={input}
                />
                <button className='search__button' type='submit' onClick={handleSearch}>
                    <svg className='search__icon' aria-hidden='true' viewBox='0 0 24 24'>
                        <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
                    </svg>
                </button>
            </form>
			<div className='search__select'>
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
		</div>
	)
}
