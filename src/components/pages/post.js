import React, { useContext, useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { SocialContext } from '..'

const Post = () => {

	let { id } = useParams();
	const context = useContext(SocialContext)
	const [page_comments, setPage] = useState({post: {}, comment: {}})

	useEffect(() => {
		if (context.posts) {
			const post = context.posts.find(post => post.id === id);
			const comments =  context.comments.filter((comment) => {
				return comment.id === id
			})
	
			setPage({post: post, comments: comments})
		}

	}, [context, page_comments, id])

	return ( 
		<Row>
			<Col></Col>
			<Row></Row>
		</Row>

	)
}
 
export default Post