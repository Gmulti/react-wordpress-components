import React from 'react'

function Categories({ items = [] }) {
    return (
        <ul>
            {items.map((item, key) => (
                <li key={key}>{item.name}</li>
            ))}
        </ul>
    )
}

export default Categories
