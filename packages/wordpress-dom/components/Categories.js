import React from 'react'
import PropTypes from 'prop-types'

function Categories({ items = [] }) {
    return (
        <ul>
            {items.map((item, key) => (
                <li key={key}>{item.name}</li>
            ))}
        </ul>
    )
}

Categories.propTypes = {
    items: PropTypes.array
}

export default Categories
