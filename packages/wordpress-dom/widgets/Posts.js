import React, { useEffect } from 'react'
import { connectPosts } from '../../wordpress-api/connectors/connectPosts'
import { withPostsProvider, withPosts } from '../../wordpress-context/withPosts'
import PostsComponent from '../components/Posts'
import { isNull } from 'lodash'

const Posts = props => {
    const {
        postsContext: { dispatch, posts },
        getServicePostsApi
    } = props
    useEffect(() => {
        const fetchData = async () => {
            const posts = await getServicePostsApi().all()
            if (!isNull(posts)) {
                dispatch({ type: 'addMany', payload: posts })
            }
        }

        fetchData()
    }, [])

    return <PostsComponent items={posts} {...props} />
}

export default connectPosts(withPostsProvider()(withPosts()(Posts)))
