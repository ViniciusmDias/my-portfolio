import styled, { css } from "styled-components"
import { shade } from "polished"

export const Title = styled.h3`
	text-align: center;
	margin: 4vh 0 2vh;
`

export const Container = styled.div`
	animation: 600ms ease 600ms 1 normal forwards running fade;
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	width: 100%;
	opacity: 0;
	padding-top: 1rem;
`
export const Posts = styled.div`
	width: 100%;
	margin-top: 1rem;

	a {
		border-radius: 5px;
		width: 100%;
		padding: 0.8rem 0;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		text-decoration: none;
		justify-content: center;
		transition: all 0.2s ease-in-out;
		opacity: 0.8;

		&:hover {
			transform: translateX(10px);
			opacity: 1;
		}

		img {
			margin: 0;
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
		}

		p {
			color: #999;
			margin-top: 4px;
		}
		section {
			display: flex;
			flex-direction: column;
			min-width: 250px;
			flex: 1;
			justify-content: center;
			align-items: flex-start;

			strong {
				color: var(--near-black);
			}
		}

		.more {
			display: flex;
			margin: 0.5rem 1rem;
			align-self: flex-start;
			align-items: center;

			span {
				color: var(--orange);
				font-weight: bold
			}
		}
		svg {
			margin-left: auto;
			color: var(--orange);
			font-size: 2rem;
		}
	}
`
export const Form = styled.form`
	max-width: 700px;
	display: flex;
	margin-bottom: 10vh;

	input {
		flex: 1;
		height: 4rem;
		padding: 0 1rem;
		font-size: 0.8rem;
		border: 0;
		border-radius: 5px 0 0 5px;
		background: #00000008;
		color: #3a3a3a;
		border: 2px solid #fff;

		${props =>
		props.hasError &&
		css`
				border-color: #c53030;
			`}

		&::placeholder {
			color: #a8a8b3;
		}
	}

	button {
		max-width: 210px;
		width: 28vw;
		height: 4rem;
		background: var(--orange-light);
		border-radius: 0px 5px 5px 0;
		border: 0;
		color: var(--dark-gray);
		font-weight: bold;
		transition: background-color 0.2s;
		cursor: pointer;
		font-size: 0.8rem;
		border: 2px solid #fff;

		&:hover {
			background: ${shade(0.1, "#ffc799")};
		}
	}
`

export const Error = styled.span`
	display: block;
	color: #c53030;
	margin-top: 8px;
`
