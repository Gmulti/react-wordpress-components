import React, { useEffect } from 'react'
import { connectPosts } from '../../wordpress-api/connectors/connectPosts'
import { withPostsProvider, withPosts } from '../../wordpress-context/withPosts'
import PostsComponent from '../components/Posts'

const Posts = props => {
    const {
        postsContext: { dispatch, posts },
        getServicePostsApi
    } = props
    useEffect(() => {
        const fetchData = async () => {
            const posts = await getServicePostsApi().all()
            dispatch({ type: 'addMany', payload: posts })
        }

        fetchData()
    }, [])

    return <PostsComponent posts={posts} {...props} />
}

export default connectPosts(withPostsProvider()(withPosts()(Posts)))
