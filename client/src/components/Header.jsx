import React from 'react'
import './Header.css'

// redux
import { getBySource, setOrder } from "../redux/dogSlice"
import { useDispatch, useSelector } from "react-redux"

const styles = {
	header: {
		width: "80%",
		display: "flex",
		flexWrap: "wrap",
		gap: "3rem",
	},
}
const orderTitle = {
    ALPHABETIC: {
        ASC: 'A-Z',
        DESC: 'Z-A'
    },
    WEIGHT: {
        ASC: '1-9',
        DESC: '9-1'
    }
}

export default function Header() {
    const dispatch = useDispatch()
    const { source } = useSelector(state => state.dogs)
    const { order } = useSelector(state => state.dogs)

    const handleOrder = (e) => {
        const { name:type, value:direction } = e.target
        dispatch(setOrder({ type, direction }))
    }

    const handleSourceFilter = (source) => {
        dispatch(getBySource(source))
    }

  return (
		<header style={styles.header}>
			<div>
				<h1>Dogs</h1>
			</div>

			<div>
				<label>Select source:</label>
				<input
					type='radio'
					name='source'
					value='ALL'
					checked={source === "ALL"}
					onChange={() => handleSourceFilter("ALL")}
				/>
				<label>All</label>
				<input
					type='radio'
					name='source'
					value='API'
					checked={source === "API"}
					onChange={() => handleSourceFilter("API")}
				/>
				<label>API</label>
				<input
					type='radio'
					name='source'
					value='DB'
					checked={source === "DB"}
					onChange={() => handleSourceFilter("DB")}
				/>
				<label>Yours</label>
			</div>

			<div>
				<button
					title='Alphabetic order'
					name='ALPHABETIC'
					value={ order["ALPHABETIC"]==='ASC' ? 'DESC' : 'ASC' }
					onClick={handleOrder}
				>
					{orderTitle["ALPHABETIC"][order["ALPHABETIC"]]}
				</button>

				<button
					title='Order by weight'
					name='WEIGHT'
					value={ order["WEIGHT"]==='ASC' ? 'DESC' : 'ASC' }
					onClick={handleOrder}
				>
					{orderTitle["WEIGHT"][order["WEIGHT"]]}
				</button>
			</div>
		</header>
	)
}
