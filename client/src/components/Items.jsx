import { useEffect } from "react"
import styled from "styled-components"
import Item from "./Item"
import Loading from "./Loading"
import EmptyData from './EmptyData'
import ErrorMessage from './ErrorMessage'
// redux
import { fetchAllDogs, setCurrentPage } from "../redux/dogSlice"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "./Pagination"

export default function Items() {
	const dispatch = useDispatch()
    const {
        list,
		filtered: dogs,
		currentPage,
        loading,
        status,
        searchName,
	} = useSelector((state) => state.dogs)

	// pagination
	const countPerPage = 8
	const firstIdx = (currentPage - 1) * countPerPage
	const lastIdx = firstIdx + countPerPage
	const page = dogs.slice(firstIdx, lastIdx)

	useEffect(() => {
        if (!list.length && !searchName) {
			dispatch(fetchAllDogs())
        }
	}, [dispatch, list, searchName])

	const handlePageChange = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
    }

	return (
		<>
			<Container>
				{loading ? (
					<Loading />
				) : !dogs.length ? (
                    status ? <ErrorMessage msg={status} /> : <EmptyData />
				) : (
					<>
						{page.map((dog) => (
							<Item key={dog.id} {...dog} />
						))}

						<Pagination
							handleChange={handlePageChange}
							totalItems={dogs.length}
							currentPage={currentPage}
							countPerPage={countPerPage}
						/>
					</>
				)}
			</Container>
		</>
	)
}

//Styled Component
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
    gap: 20px;
`