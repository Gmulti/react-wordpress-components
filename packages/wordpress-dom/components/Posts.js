import React from 'react'
import PropTypes from 'prop-types'

function Posts({ items = [] }) {
    return (
        <ul>
            {items.map((post, key) => (
                <li key={key}>{post.title.rendered}</li>
            ))}
        </ul>
    )
}

Posts.propTypes = {
    items: PropTypes.array
}

export default Posts
