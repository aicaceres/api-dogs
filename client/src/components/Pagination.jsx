import React from "react"
import styled from "styled-components"

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

// Styled components
const PaginationContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding:0;
    margin-top:20px;
    margin-bottom: 50px;
    & li{
        padding: 0 12px;
        height: 32px;
        text-align: center;
        margin: auto 4px;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        box-sizing: border-box;
        align-items: center;
        letter-spacing: 0.01071em;
        border-radius: 16px;
        line-height: 1.43;
        font-size: 13px;
        min-width: 32px;
        cursor: pointer;
        &:hover{
            background-color: rgba(0, 0, 0, 0.04);
        }
        &.selected {
            background-color: rgba(0, 0, 0, 0.2);
        }
        .arrow {
            &::before {
                position: relative;
                content: '';
                /* By using an em scale, the arrows will size with the font */
                display: inline-block;
                width: 0.4em;
                height: 0.4em;
                border-right: 0.12em solid rgba(0, 0, 0, 0.87);
                border-top: 0.12em solid rgba(0, 0, 0, 0.87);
            }

            &.left {
                transform: rotate(-135deg) translate(-50%);
            }

            &.right {
                transform: rotate(45deg);
            }
        }
        .double {
            &::before {
                border-right: 0.3em double rgba(0, 0, 0, 0.87);
                border-top: 0.3em double rgba(0, 0, 0, 0.87);
            }
        }
        &.disabled {
            pointer-events: none;

            .arrow::before {
                border-right: 0.12em solid rgba(0, 0, 0, 0.43);
                border-top: 0.12em solid rgba(0, 0, 0, 0.43);
            }
            .double::before {
                border-right: 0.3em double rgba(0, 0, 0, 0.43);
                border-top: 0.3em double rgba(0, 0, 0, 0.43);
            }

            &:hover {
                background-color: transparent;
                cursor: default;
            }
        }
    }
`