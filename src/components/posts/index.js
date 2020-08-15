import React, { useState, useEffect } from "react"
import { FiChevronRight } from "react-icons/fi"
import { apiDev } from "../../services/api"

import { Title, Posts } from "./styles"
/*
interface PostProps {
	id: Number;
	title: String;
	description: String;
	readable_publish_date: String;
	url: String;
	tag_list: [String];
	public_reactions_count: String;
}*/

const Post = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		apiDev.get(``).then(response => {
			setPosts(response.data)
		})
	}, [])

	console.log(posts)

	return (
		<>
			<Title>Last posts</Title>
			<Posts>
				{posts.map(post => (
					<a key={post.id} href={`${post.url}`}>
						<section>
							<span>{post.readable_publish_date}</span>
							<strong>{post.title}</strong>
							<p>{post.description}</p>
						</section>
						<div>
							<span>Read More</span>

							<FiChevronRight size={20} />
						</div>
					</a>
				))}
			</Posts>
		</>
	)
}
export default Post
