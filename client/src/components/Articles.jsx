import { useEffect, useState } from "react"
import Article from "./Article"
import Loading from "./Loading"
// redux
import { fetchAllDogs } from "../redux/dogSlice"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "./Pagination"

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


	// pagination
	const countPerPage = 8
	const [currentPage, setCurrentPage] = useState(1)
	const firstIdx = (currentPage - 1) * countPerPage
	const lastIdx = firstIdx + countPerPage
	const page = dogs.slice(firstIdx, lastIdx)

    useEffect(() => {
         setCurrentPage(1)
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
                        <>
                            <Pagination
                                handleChange={(pageNumber) => setCurrentPage(pageNumber)}
                                totalArticles={dogs.length}
                                currentPage={currentPage}
                                countPerPage={countPerPage}
                            />

                            {page.map((dog) => (
                                <Article key={dog.id} {...dog} />
                            ))}
                        </>
                    )}
			</div>
		</>
	)
}
