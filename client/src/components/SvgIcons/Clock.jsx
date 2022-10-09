import React from "react"

export default function Clock() {
	return (
		<svg
			fill='currenColor'
			height='20'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
			width='20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				clip-rule='evenodd'
				d='M1.5 7C1.5 3.96243 3.96243 1.5 7 1.5H17C20.0376 1.5 22.5 3.96243 22.5 7V17C22.5 20.0376 20.0376 22.5 17 22.5H7C3.96243 22.5 1.5 20.0376 1.5 17V7ZM7 2.5C4.51472 2.5 2.5 4.51472 2.5 7V17C2.5 19.4853 4.51472 21.5 7 21.5H17C19.4853 21.5 21.5 19.4853 21.5 17V7C21.5 4.51472 19.4853 2.5 17 2.5H7Z'
				fill-rule='evenodd'
			/>
			<path
				clip-rule='evenodd'
				d='M11.5 12V5H12.5V11.5H19V12.5H12C11.7239 12.5 11.5 12.2761 11.5 12Z'
				fill-rule='evenodd'
			/>
		</svg>
	)
}
