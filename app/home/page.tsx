import profileImage from "../../public/vinigoogle.jpg"
import nextLogo from "../../public/next.svg"
import reactLogo from "../../public/react.svg"
import nodeLogo from "../../public/node.svg"
import awsLogo from "../../public/aws.svg"
import javascript from "../../public/javascript.svg"
import gatsbyLogo from "../../public/gatsby.svg"
import { FaArrowRight } from "react-icons/fa"
import * as S from './styles'

import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <S.Intro className="container">
				<S.Background>
					<Image src={profileImage} alt="Profile image" />
				</S.Background>
				<S.Description>
					<h1>I'm a software 
						engineer with +4 
						years of experience
					</h1>

					<h2> 
						I'm primarily focused on frontend applications. My main programming skill is JavaScript, and I have extensive experience with technologies such as:
					</h2>
					<S.TechLogos>
						<Image src={nextLogo} alt="Next image"  />
						<Image src={awsLogo} alt="Next image" style={{ alignSelf: "flex-end"}} />
						<Image src={reactLogo} alt="Next image" />
						<Image src={nodeLogo} alt="Next image" />
						<Image src={gatsbyLogo} alt="Next image" />
						<Image src={javascript} alt="Next image" />
					</S.TechLogos>
					<Link className="button" href="contact" title="Let's talk!">
            Let's talk!
            <FaArrowRight />
          </Link>
				</S.Description>
		</S.Intro>
  )
}