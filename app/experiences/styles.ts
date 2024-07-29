'use client'

import styled from 'styled-components'

export const Experiences = styled.div`
	animation: 600ms ease 600ms 1 normal forwards running fade;
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	width: 100%;
	opacity: 0;

	h1 {
		width: 100%;
	}

	p {
		margin: 0 0 2vh;
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

export const Content = styled.section`
	display: flex;
	flex-direction: row;
`

export const Experience = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	-moz-box-pack: center;
	justify-content: center;

	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: stretch;
	}
`

export const Item = styled.div`
	margin: 2vh 0;
	display: flex;

	@media (min-width: 768px) {
		width: 49%;
	}

	@media (min-width: 1140px) {
		display: flex;
		width: 100%;
	}
`

export const InfoItem = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	align-items: flex-start;
	width: 100%;
	border-radius: 0 0 10px 10px;

	@media (min-width: 1140px) {
		width: 50%;
		justify-content: center;
	}
`

export const Title = styled.div`
	align-items: flex-start;
	display: flex;
	-moz-box-pack: justify;
	justify-content: space-between;
	width: 100%;
	flex-flow: column wrap;
	margin-bottom: 12px;

	a {
		display: flex;
		align-items: center;
		color: var(--gray);
		font-size: 1rem;
		position: relative;
		margin-right: 1rem;
		height: 44px;
		outline: none;
		transition: opacity 0.2s ease-in-out;
		box-shadow: 0 1px 0 0 currentColor;
	}

	a:hover {
		opacity: 0.7;
	}

	a::after {
		content: "";
		position: absolute;
		bottom: 0.3rem;
		left: 0;
		width: 0;
		height: 0.15rem;
		background-color: var(--orange-light);
		transition: width 0.2s;
	}

	a::after:hover {
		width: 1.6rem;
	}

	@media (min-width: 1140px) {
		flex-flow: row;
		align-items: center;
	}
`

export const Description = styled.p`
	font-size: 0.8rem;
	font-weight: 400;
	letter-spacing: 0;
	text-align: left;
	line-height: 28px;
	color: #292f35;
	margin-bottom: 12px;
`

export const Category = styled.div`
	display: flex;
	flex-wrap: wrap;

	p {
		margin: 0 1vh 1vh 0;
		font-size: 12px;
		font-weight: 500;
		line-height: 1;
		padding: 6px 8px;
		border-radius: 4px;
		background-color: #31373e;
		color: #ffd24e;
	}
`

export const Timeline = styled.div`
	-webkit-transition: top 0.3s ease-out;
	transition: top 0.3s ease-out;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20%;

	ul {
		list-style: none;
		list-style-position: inside;
		margin: 1vh 0;

		li {
			margin: 2vh 0;
			padding-left: 0;
			list-style-type: none;
			color: #bfc1c3;
			border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
			-webkit-transition: all 0.3s ease-out;
			transition: all 0.3s ease-out;

			&:hover {
				color: #000;
			}
		}
	}
	@media (min-width: 1140px) {
		width: 35%;
	}
`

