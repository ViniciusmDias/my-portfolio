'use client'

import styled from 'styled-components'

export const Contact = styled.div`
	animation: 600ms ease 600ms 1 normal forwards running fade;
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	width: 100%;
	opacity: 0;

	h1 {
		width: 100%;
	}

	form {
		width: 100%;
		max-width: 700px;
		margin-bottom: 0;
	}

	label {
		display: flex;
		flex-direction: column;
		margin: 0 0.5rem 0 0;
		width: 100%;
		font-size: medium;

		input {
			padding: 0.125rem 0.25rem;
			line-height: 32px;
		}
		
		textarea {
			padding: 0.125rem 0.25rem;
			line-height: 32px;
		}
	}

	button, select{
		-moz-box-align: center;
		align-items: center;
		background-color: transparent;
		display: inline-flex;
		cursor: pointer;
		font-size: medium;
		font-weight: 700;
		line-height: 1;
		padding: 8px 16px;
		background-color: var(--orange-light);
		color: var(--dark-gray);
		border-radius: 10px;
		transition: transform 0.5s ease;
		text-transform: capitalize;
		justify-content: center;
		width: 14ch;
		align-self: center;
		border: var(--orange-light);

		&:hover {
			transform: scale(1.1);
		}
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
	margin: 0.5rem 0;
`
