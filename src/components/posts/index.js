import React, { useState, useEffect } from "react"
import { FiChevronRight } from "react-icons/fi"
import { apiDev } from "../../services/api"

import { Container, Posts } from "./styles"
import Button from "../button"
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

	return (
		<Container className="container">
			<h1>Latest posts</h1>
			<Posts>
				{posts.map(post => (
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
			</Posts>
			<Button title="Let's talk!" route="contact"/>
		</Container>
	)
}
export default Post
