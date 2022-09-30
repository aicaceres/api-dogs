import { useEffect } from "react"
import Article from "./Article"
import Loading from "./Loading"
// redux
import { fetchAllDogs } from "../redux/dogSlice"
import { useDispatch, useSelector } from "react-redux"

const styles = {
	articles: {
		width: "80%",
		display: "flex",
		flexWrap: "wrap",
		gap: "3rem",
	},
}

export default function Articles() {
	const dispatch = useDispatch()
	const { list, filtered: dogs, loading } = useSelector((state) => state.dogs)

	useEffect(() => {
		if (!list.length) {
			dispatch(fetchAllDogs())
		}
	}, [dispatch, list])
	return (
		<>
			<div style={styles.articles}>
				{loading ? (
					<Loading />
				) : !dogs.length ? (
					<div style={{ width: "100%", textAlign: "center" }}>
						<img
							alt='sin datos'
							src='/assets/loading-smell.gif'
							style={{ width: "400px" }}
						/>
					</div>
				) : (
					dogs.map((dog, i) => {
						if (i < 8) return <Article key={dog.id} {...dog} />
						else return false
					})
				)}
			</div>
		</>
	)
}
