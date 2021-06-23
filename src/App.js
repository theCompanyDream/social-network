import React, { useState, Suspense,  useLayoutEffect } from 'react';
import { Route } from "react-router-dom"

import './components/styles/App.css';

import { Layout, SocialContext } from './components'

const Feed = React.lazy(() => import('./components/pages/feed'))
const Post =  React.lazy(() => import('./components/pages/post'))

const App = () => {

  const [body, setState] = useState({loading: true})
  
  useLayoutEffect(() => {

    async function fetch_feed() {

      // Avoid Contstant reloads
      const [posts_resp, comments_resp] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts`),
        fetch(`https://jsonplaceholder.typicode.com/comments`)
      ])

      const posts = await posts_resp.json()
      const comments = await comments_resp.json()

      return [posts, comments]
    }

    fetch_feed().then(([posts, comments]) => {
      setState({posts: posts, comments: comments, loading: false})
    })

  }, [body])

  return (
    <SocialContext.Provider value={body}>
      <Layout>
        <Suspense fallback={<div>Loading ...</div>}>
          <Route exact path="/" component={Feed} />
          <Route exact path="/post" component={Post} />
        </Suspense>
      </Layout>
    </SocialContext.Provider>
  )
}

export default App
