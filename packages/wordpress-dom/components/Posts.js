import React, { Component } from 'react'
import connectPosts from '../../wordpress-api/connectors/connectPosts'

@connectPosts()
class Posts extends Component {
    render() {
        const { posts = [] } = this.props
        return (
            <ul>
                {posts.map((post, key) => (
                    <li key={key}>{post.title.rendered}</li>
                ))}
            </ul>
        )
    }
}

export default Posts
