import React, { useState, Suspense,  useLayoutEffect } from 'react';
import { Route } from "react-router-dom"

import './components/styles/App.css';

import { Layout, SocialContext } from './components'

const Posts = React.lazy(() => import('./components/pages/posts'))
const Comments =  React.lazy(() => import('./components/pages/comments'))

const App = () => {

  const [body, setState] = useState({})
  
  useLayoutEffect(() => {

    async function fetch_feed() {
      const [posts_resp, comments_resp] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts`),
        fetch(`https://jsonplaceholder.typicode.com/comments`)
      ])

      const posts = await posts_resp.json()
      const comments = await comments_resp.json()

      return [posts, comments]
    }

    fetch_feed().then(([posts, comments]) => {
      setState({posts: posts, comments: comments})
    })

  }, [body])

  return (
    <SocialContext.Provider value={body}>
      <Layout>
        <Suspense fallback={<div>Loading ...</div>}>
          <Route exact path="/" component={Posts} />
          <Route exact path="/comments" component={Comments} />
        </Suspense>
      </Layout>
    </SocialContext.Provider>
  )
}

export default App
