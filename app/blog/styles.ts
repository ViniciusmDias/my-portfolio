'use client'

import styled from 'styled-components'

export const Blog = styled.div`
	animation: 600ms ease 600ms 1 normal forwards running fade;
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	width: 100%;
	opacity: 0;

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

			span {
				color: #007acc;
			}

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