'use client'

import styled from 'styled-components'

export const Intro = styled.div`
  animation: 600ms ease 600ms 1 normal forwards running intro;
	display: flex;
	flex-direction: column;
	opacity: 0;
	width: 100%;
	height: 88vh;
	align-items: center;

	@keyframes intro {
		0% {
			transform: translateY(5%);
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media(min-width: 440px){ 
		a {
			align-self: flex-start;
		}
	}

	@media (min-width: 1030px) {
		flex-direction: row;
		justify-content: space-between;
	}
`

export const Background = styled.div`
	width: 100%; 

	img {
		width: 100%;
		max-width: 400px;
		max-height: 406px;
		object-fit: cover;
		border-radius: 20px;
		margin: 0;

		@media(min-width: 450px) {
			max-width: 350px;
			max-height: 406px;
		}

		@media(min-width: 1030px) {
			max-width: 450px;
			max-height: 506px;
		}
	}

	@media (min-width: 1030px) {
		width: 40%; 
	}
`

export const Description = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		font-weight: 700;
		line-height: 3rem;
		margin-bottom: 0.5rem;
		max-width: 20ch;
		z-index: 2;
	}

	h2 {
		font-size: medium;
		line-height: 1.5rem;
		margin: 0.5rem 0 0.25rem;
	}

	p {
		font-weight: 400;
		letter-spacing: 0px;
		font-size: medium;
		text-indent: 0.5rem;
	}

	@media (min-width: 1030px) {
		width: 56%;

		h1 {
			font-size: 3rem;
			text-align: left;
			line-height: 55px;
		}
		h2 {
			font-size: 1.1rem
		}
	}
`

export const TechLogos = styled.div`
	display: flex;
	flex-wrap: wrap;

	img {
		margin: 1rem;
		max-width: 2rem;
		max-height: 2rem;
	}
	img+img {
		max-width: 1.5rem;
	}

	@media (min-width: 900px) {
		display: flex;
		align-items: center;

		img {
			max-width: 3rem;
			height: 3rem;
		}
		img+img {
			max-width: 2.5rem;
			max-height: 2.5rem;
		}
	}
`
