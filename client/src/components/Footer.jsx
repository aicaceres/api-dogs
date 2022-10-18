import styled from "styled-components"
import { Linkedin, Github } from "./SvgIcons"

export default function Footer() {
	return (
		<Container>
			<span>Develop by Alejandra Inés Cáceres</span>
			<a
				href='https://www.linkedin.com/in/alejandrainescaceres'
				title='LinkedIn'
				target='_blank'
				rel='noreferrer'
			>
				<Linkedin />
			</a>
			<a
				href='https://github.com/aicaceres/api-dogs'
				title='GitHub'
				target='_blank'
				rel='noreferrer'
			>
				<Github />
			</a>
		</Container>
	)
}
// Styled components
const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: right;
	gap: 1rem;
	padding: 0 80px 10px;
	font-size: 12px;
	color: rgb(0, 0, 0, 0.6);
    margin-top:auto;
	span {
		align-self: center;
	}
	svg {
		color: rgb(0, 0, 0, 0.6);
	}
`
