'use client'

import Link from "next/link"
import { FiChevronRight } from "react-icons/fi"
import { FaArrowRight } from "react-icons/fa"
import { useCallback, useEffect, useState } from "react"
import { apiDev } from "../services/api"
import * as S from './styles'

interface PostProps {
	id: number;
	title: string;
	description: string;
	readable_publish_date: string;
	url: string;
	tag_list: [string];
	public_reactions_count: string;
}

export default function Blog() {
	const [loading, setLoading] = useState(true)
	const [posts, setPosts] = useState({} as PostProps[])

	const setPostsInfo = useCallback(async () => {
		setLoading(true)
		try {
			const newPosts = await apiDev.get(``)

			if (newPosts) {
				setPosts(newPosts.data);
			}
			setLoading(false)
		} catch (error) {
			console.error(error)
			setLoading(false)
		}
	}, [])

	useEffect(() => { 
		setPostsInfo();
	}, [setPostsInfo])

  return (
    <S.Blog className="container">
			<h1>Latest posts</h1>
			{loading ? <p>Loading...</p> : (
			<>
				<S.Posts>
					{posts.length > 0 && posts.map(post => (
						<a key={post.id} href={`${post.url}`}>
							<section>
								<span>{post.readable_publish_date}</span>
								<strong>{post.title}</strong>
								<p>{post.description}</p>
							</section>
							<div className="more">
								<span>Read More</span>

								<FiChevronRight size={20} />
							</div>
						</a>
					))}
				</S.Posts>
				<Link className="button" href="contact" title="Contact">
					Contact
					<FaArrowRight />
				</Link>	
				</>
			)}
		</S.Blog>
  )
}