import React from "react"
import PaginationContainer from "../styles/PaginationContainer"

export default function Pagination({
	handleChange,
	totalItems,
	currentPage,
	countPerPage,
}) {
	const pagesCount = Math.ceil(totalItems / countPerPage)

	if (pagesCount === 1) return null

	// range of numbers
	let firstNumber = 1
	let lastNumber = 1
	// adicional numbers at the left and the right of currentpage
	const adicionalNumbers = 2
	// total of numbers in the pagination bar
	let countOfNumbers = adicionalNumbers * 2 + 1

	if (countOfNumbers >= pagesCount) {
		countOfNumbers = pagesCount
	} else {
		firstNumber = Math.max(currentPage - adicionalNumbers, 1)
		lastNumber = Math.min(currentPage + adicionalNumbers, pagesCount)
		// complete the pagination bar in the end
        if (lastNumber === pagesCount) {
            firstNumber += lastNumber - firstNumber - adicionalNumbers * 2
        }
	}
	// make the page numbers with the range
	const pageNumbers = new Array(countOfNumbers)
		.fill()
		.map((d, i) => i + firstNumber)

	return (
		<PaginationContainer>
			<li
				onClick={() => handleChange(1)}
				className={currentPage === 1 ? "disabled" : ""}
				title='First Page'
			>
				<div className='arrow double left' />
			</li>
			<li
				onClick={() => handleChange(currentPage - 1)}
				className={currentPage === 1 ? "disabled" : ""}
				title='Previous'
			>
				<div className='arrow left' />
			</li>

			{pageNumbers.map((number) => {
				return (
					<li
						key={number}
						className={currentPage === number ? "selected" : ""}
						onClick={() => handleChange(number)}
					>
						{number}
					</li>
				)
			})}

			<li
				onClick={() => handleChange(currentPage + 1)}
				className={pagesCount === currentPage ? "disabled" : ""}
				title='Next'
			>
				<div className='arrow right' />
			</li>
			<li
				onClick={() => handleChange(pagesCount)}
				className={pagesCount === currentPage ? "disabled" : ""}
				title='Last Page'
			>
				<div className='arrow double right' />
			</li>
		</PaginationContainer>
	)
}
