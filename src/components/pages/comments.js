import React, { useContext, useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'

import { SocialContext } from '../'

const Comment = (post) => {

	const context = useContext(SocialContext)
	const [comments, setComment] = useState()

	useEffect(() => {

	}, [])

	return ( 
		<Row>
			<Col></Col>
		</Row>
	)
}
 
export default Comment