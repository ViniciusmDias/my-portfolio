'use client'

import React, { useState } from "react"
import HamburgerMenu from "react-hamburger-menu"
import * as S from './styles'

import { FaGithub, FaLinkedin } from "react-icons/fa"
import Link from "next/link"

export default function Header() {
	const [movClick, setMovClick] = useState(false)
	const [hamburguer, setHamburguer] = useState(false)

	const clickStyle = movClick ? "click" : ""

	function handleClick() {
		document.documentElement.style.overflow = movClick ? "initial" : "hidden"

		setHamburguer(!hamburguer)
		setMovClick(!movClick)
	}

	return (
		<S.Header>
			<S.Wrapper className={`${clickStyle}`}>
				<S.Logo href="/" title="Go to hometitle" className={`${clickStyle}`}>
					<h2>Vinicius Dias</h2>
				</S.Logo>
				<S.Menu>
					<li>
						<Link title="Go to about me page" href="/about">
							About me
						</Link>
					</li>
					<li>
						<Link title="Go to experiences page" href="/experiences">
							Experiences
						</Link>
					</li>
					<li>
						<Link title="Go to case article page" href="/blog">
							Blog
						</Link>
					</li>
					<li>
						<Link title="Go to contact page" href="/contact">
							Contact
						</Link>
					</li>
				</S.Menu>
				<S.SocialIcons>
					<a
						title="Go to vinicius dias github"
						href="https://github.com/ViniciusmDias"
					>
						<FaGithub />
					</a>
					<a
						title="Go to vinicius dias linkedin"
						href="https://www.linkedin.com/in/vinicius-m-dias/"
					>
						<FaLinkedin />
					</a>
				</S.SocialIcons>
				<S.HamburguerContainer onClick={handleClick} className={`${clickStyle}`}>
					<HamburgerMenu
						isOpen={hamburguer}
						width={25}
						height={16}
						strokeWidth={2}
						rotate={0}
						color="var(--near-black)"
						borderRadius={0}
						animationDuration={0.5}
						menuClicked={handleClick}
					/>
				</S.HamburguerContainer>
			</S.Wrapper>
			<S.AsideContainer className={`${clickStyle}`}>
				<S.AsideMenu>
					<Link title="Go to about page" href="/about">
						About me
					</Link>
					<Link title="Go to experience page" href="/experiences">
						Experiences
					</Link>
					<Link title="Go to my articles page" href="/blog">
						Blog
					</Link>
					<Link title="Go to contact page" href="/contact">
						Contact
					</Link>
				</S.AsideMenu>
				<S.SocialIcons>
					<a
						title="Go to vinicius dias github"
						href="https://github.com/ViniciusmDias"
					>
						<FaGithub />
					</a>
					<a
						title="Go to vinicius dias linkedin"
						href="https://www.linkedin.com/in/vinicius-m-dias/"
					>
						<FaLinkedin />
					</a>
				</S.SocialIcons>
			</S.AsideContainer>
		</S.Header>
	)
}
