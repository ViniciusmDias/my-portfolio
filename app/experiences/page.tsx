import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { experiences } from "../data/experiences"
import * as S from "./styles"

export default function Experiences() {
	
  return (
    <S.Experiences className="container">
			<h1>Experiences</h1>
			<S.Content
			>
				<S.Experience>
					{experiences.sort((a,b) => a.order - b.order).map(experience => (
						<S.Item
							key={experience.order}
						
						>
							<S.InfoItem>
								<S.Title>
									<a href={experience.url}>
										{experience.title}
									</a>
								</S.Title>
								<S.Description>
									{experience.description}
								</S.Description>
								<S.Category>
									{experience.categories
										.map(item => (
											<p key={item}>{item}</p>
										))}
								</S.Category>
							</S.InfoItem>
							<S.Timeline>
								<ul>
									<li>
										<span>{experience.year}</span>
									</li>
								</ul>
							</S.Timeline>
						</S.Item>
					))}
				</S.Experience>
			</S.Content>
			<Link className="button" href="blog" title="Blog">
				Blog
				<FaArrowRight />
			</Link>	
		</S.Experiences>
  )
}