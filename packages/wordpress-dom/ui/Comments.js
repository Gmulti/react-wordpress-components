import React from 'react'
import PropTypes from 'prop-types'

function Comments({ items = [] }) {
    return (
        <ul>
            {items.map((comment, key) => (
                <li key={key}>
                    <h2>Author : {comment.author_name}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: comment.content.rendered
                        }}
                    ></div>
                </li>
            ))}
        </ul>
    )
}

Comments.propTypes = {
    items: PropTypes.array
}

export default Comments
