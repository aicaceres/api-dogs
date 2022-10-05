import { useEffect } from "react"
import Item from "./Item"
import Loading from "./Loading"
// redux
import { fetchAllDogs, setCurrentPage } from "../redux/dogSlice"
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

export default function Items() {
	const dispatch = useDispatch()
	const { list, filtered: dogs, currentPage, loading } = useSelector((state) => state.dogs)

	// pagination
	const countPerPage = 8
	const firstIdx = (currentPage - 1) * countPerPage
	const lastIdx = firstIdx + countPerPage
	const page = dogs.slice(firstIdx, lastIdx)

    useEffect(() => {
		if (!list.length) {
			dispatch(fetchAllDogs())
        }
    }, [dispatch, list])

    const handlePageChange = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
    }

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
                            {page.map((dog) => (
                                <Item key={dog.id} {...dog} />
                            ))}

                            <Pagination
                                handleChange={ handlePageChange }
                                totalItems={dogs.length}
                                currentPage={currentPage}
                                countPerPage={countPerPage}
                            />
                        </>
                    )}
			</div>
		</>
	)
}
