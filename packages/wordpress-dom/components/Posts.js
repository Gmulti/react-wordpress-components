import React from 'react'

function Posts({ posts = [] }) {
    return (
        <ul>
            {posts.map((post, key) => (
                <li key={key}>{post.title.rendered}</li>
            ))}
        </ul>
    )
}

export default Posts
