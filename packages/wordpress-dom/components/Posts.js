import React from 'react'
import PropTypes from 'prop-types'

function Posts({ posts = [] }) {
    return (
        <ul>
            {posts.map((post, key) => (
                <li key={key}>{post.title.rendered}</li>
            ))}
        </ul>
    )
}

Posts.propTypes = {
    posts: PropTypes.array
}

export default Posts
