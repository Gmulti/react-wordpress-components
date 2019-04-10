import React from 'react'
import { connectPosts } from '../../wordpress-api/connectors/connectPosts'
import PostsComponent from '../components/Posts'

const Posts = props => <PostsComponent {...props} />

export default connectPosts(Posts)
