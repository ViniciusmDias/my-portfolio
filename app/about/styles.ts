'use client'

import styled from 'styled-components'

export const About = styled.div`
	animation: 600ms ease 600ms 1 normal forwards running fade;
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	width: 100%;
	opacity: 0;

	h2 {
		width: 100%;
		font-size: 2.3rem;
	}

	p {
		margin: 4vh 0 2vh;
	}

	@keyframes fade {
		0% {
			transform: translateY(5%);
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 2rem 0;

	@media(min-width: 650px) {
		flex-wrap: nowrap;

		.image {
			min-width: 30%;
		}
	}
`

export const RowReverse = styled.div`
	display: flex;
	flex-direction: row-reverse;

	h2 {
		text-align: right;
	}

	p {
		text-align: right;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
`

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin:	 1rem;

	img {
		width: 100%;
		height: 100%;
		max-height: 250px;
		object-fit: cover;
		border-radius: 20px;

		@media(min-width: 1600px) {
			max-height: 400px;
		}
	}

	@media(min-width: 650px) {
		min-width: 30%;
	}
`

