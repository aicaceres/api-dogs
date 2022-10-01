import React from "react"

export default function Pagination({
	handleChange,
	totalArticles,
	currentPage,
	countPerPage,
}) {
	// count of pages = total of dogs / count of dogs per page
	const pagesCount = Math.ceil(totalArticles / countPerPage)

	// si tengo una sola pagina no renderiza nada
	if (pagesCount === 1) return null

	// control de botones next y previous
	const handlePrevious = () => handleChange(currentPage - 1)
	const handleNext = () => handleChange(currentPage + 1)

	// range of numbers
	let firstNumber = 1
	let lastNumber = 1
	// adicional numbers at the left and the right
	const adicionalNumbers = 2
	// total of numbers in the pagination bar
	const countOfNumbers = adicionalNumbers + 5

	if (countOfNumbers >= pagesCount) {
		firstNumber = 1
		lastNumber = pagesCount
	} else {
		firstNumber = Math.max(currentPage - adicionalNumbers, 1)
		lastNumber = Math.min(currentPage + adicionalNumbers, pagesCount)
		// pagination bar completion
		const difference = lastNumber - firstNumber
		if (difference < adicionalNumbers * 2) {
			firstNumber === 1
				? (lastNumber += adicionalNumbers * 2 - difference)
				: (firstNumber -= Math.abs(difference - adicionalNumbers * 2))
		}
	}
	// make the page numbers with the range
	const pageNumbers = []
	for (let i = firstNumber; i <= lastNumber; i++) {
		pageNumbers.push(i)
	}

	return (
		<div>
			<ul>
				<li>
					<button onClick={handlePrevious} disabled={currentPage === 1}>
						prev
					</button>
				</li>
				{pageNumbers.map((number) => {
					return (
						<li key={number}>
							<button
								style={{ color: currentPage === number ? "red" : "blue" }}
								onClick={() => handleChange(number)}
							>
								{number}
							</button>
						</li>
					)
				})}

				<li>
					<button onClick={handleNext} disabled={pagesCount === currentPage}>
                        next
                    </button>
				</li>
			</ul>
		</div>
	)
}
