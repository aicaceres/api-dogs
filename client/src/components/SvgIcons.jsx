export const Sort = ({ order }) => {
	// SVG icons for sort
	const icon = {
		ASC: "M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z",
		DESC: "M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z",
	}
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 20'
			fill='currentColor'
			width={20}
			height={20}
		>
			<path d={icon[order]} clipRule='evenodd' />
		</svg>
	)
}

export const Camera = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-6 h-6'
			width={22}
			height={22}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
			/>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
			/>
		</svg>
	)
}

export const Clock = () => {
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

export const Trash = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className='w-6 h-6'
			width={18}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
			/>
		</svg>
	)
}

export const LeftArrow = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-6 h-6'
			width={16}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M15.75 19.5L8.25 12l7.5-7.5'
			/>
		</svg>
	)
}
export const RightArrow = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-6 h-6'
			width={16}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M8.25 4.5l7.5 7.5-7.5 7.5'
			/>
		</svg>
	)
}

export const DoubleLeftArrow = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-6 h-6'
			width={16}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5'
			/>
		</svg>
	)
}
export const DoubleRightArrow = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
            className='w-6 h-6'
            width={16}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
			/>
		</svg>
	)
}
