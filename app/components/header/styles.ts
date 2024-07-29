'use client';

import Link from 'next/link'
import styled from 'styled-components'

export const Header = styled.header`
	display: flex;
	height: 12vh;
	padding: 0px 4vw;

	a:hover, a:hover svg {
		opacity: 0.7;
	}
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	width: 100%;
	background-color: #F3F3E9;
	transition: background-color 0.1s ease-out, transform 0.8s ease-out;
	z-index: 2;
	transition: transform 600ms ease 0s;
	justify-content: space-between;

	&.click {
		transform: translate3d(-80%, 0px, 0px);
		height: 100vh;
	}

	@media (min-width: 1140px) {
		justify-content: flex-end;
	}
`

export const Logo = styled(Link)`
	opacity: 1;
	transition: ease-in opacity 3s;

	&:hover {
		opacity: 0.7;
	}

	h2 {
		height: 100%;
		letter-spacing: 0px;
		line-height: 28px;
		text-align: left;
		text-transform: uppercase;
	}

	&.click {
		opacity: 0;
		width: 100%;
		height: 100%;
		padding-top: 0.35rem;
	}
`

export const HamburguerContainer = styled.button`
	height: 100%;
	display: flex;
	align-items: center;
	color: var(--near-black);
	transition: transform 0.3s ease-out, opacity 0.3s,
		-webkit-transform 0.3s ease-out;
	padding: 1.5rem 0rem 1.5rem 1.5rem;
	cursor: pointer;
	background-color: #F3F3E9;
	border: none;
	outline: none;

	&.click {
		pointer-events: all;
		opacity: 1 !important;
		cursor: pointer;
		padding-top: 0.6rem;
		transform: translate3d(-5%, 0, 0) !important;
		display: flex;
		width: 100%;
		align-items: flex-start;
		justify-content: flex-end;
	}

	@media (min-width: 768px) {
		display: none;
	}
`

export const AsideContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	width: 80vw;
	align-items: center;
	position: fixed;
	background-image: linear-gradient(var(--bg-color) 10%, var(--orange-light));
	padding-top: 70px;
	transform: translate3d(125%, 0%, 0);
	transition: transform 600ms ease 0s;
	z-index: 2;

	&.click {
		transform: translate3d(20%, 0px, 0px);
	}

	a {
		color: var(--dark-gray);
		font-weight: 700;
		height: 44px;
		margin: 0px 12px;
		padding: 0px 16px;
		position: relative;
		display: flex;
		align-items: center;
		transition: opacity 0.15s ease-in;
		opacity: 1;

		:after {
			background-color: #1b85a8;
			content: "";
			width: 5px;
			opacity: 0;
			position: absolute;
			top: 0px;
			bottom: 0px;
			left: 0px;
		}
	}
`

export const AsideMenu = styled.div`
	height: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 768px) {
		transform: translate3d(125%, 0, 0);
	}
`

export const SocialIcons = styled.div`
	display: none;


	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		margin: 0 0 0 6rem;

		a {
			height: 48px;
			width: 48px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--gray);
		}

		svg {
			font-size: 24px;
		}
	}
`

export const Menu = styled.ul`
	display: none;
	list-style-type: none;

	@media (min-width: 768px) {
		display: flex;
		justify-content: flex-end;
		flex: 1;

		li:hover a:after {
			width: 1.6rem;
		}

		li a:after {
			content: "";
			position: absolute;
			bottom: 0.3rem;
			left: 0;
			width: 0;
			height: 0.15rem;
			background-color: var(--orange-light);
			-webkit-transition: width 0.2s;
			transition: width 0.2s;
		}

		li a {
			display: flex;
			align-items: center;
			color: var(--gray);
			font-size: 1rem;
			position: relative;
			margin: 0 1rem;
			height: 44px;
			outline: none;
		}
	}
`