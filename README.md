# React WordPress Components

[![Travis](https://img.shields.io/travis/com/Gmulti/react-wordpress-components/master.svg?style=for-the-badge)][travis-url]

> This library manages generic components related to the WordPress API

---

## Getting started

### Installation

```sh
npm install react-wordpress-components
```

### Development with storybook

```sh
npm run storybook
```

### Usage

#### Example

```js
import React, { Component } from 'react'
import { WordPressProvider, Posts } from 'react-wordpress-components'

function MyPage() {
    return (
        <WordPressProvider baseUrl="https://example.com">
            <Posts />
        </WordPressProvider>
    )
}

// View :
// <ul>
//     <li>Post Title 1</li>
//     <li>Post Title 2</li>
//     <li>Post Title 3</li>
// </ul>
```

## Docs

### Connectors

A connector allows a component to use an API service to retrieve information from a WordPress API.
When collecting the data, you are free to use your own state, your own blinds or other.

```js
import React, { Component, useState } from 'react'
import { connectPosts } from 'react-wordpress-components'
import { isNull } from 'lodash'

const Posts = props => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const posts = await getServicePostsApi().all()
            if (!isNull(posts)) {
                setPosts(posts)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            {posts.map(post => (
                <div>{post.title}</div>
            ))}
        </div>
    )
}

export default connectPosts()(Posts)

function MyPage() {
    return (
        <WordPressProvider baseUrl="https://example.com">
            <Posts />
        </WordPressProvider>
    )
}

// View :
// <div>
//     <div>Post Title 1</div>
//     <div>Post Title 2</div>
//     <div>Post Title 3</div>
// </div>
```

### Context

The library can take care of the status of your API calls for you. A provider and a context are available.

```js
import React, { useEffect } from 'react'
import {
    connectPosts,
    PostsProvider,
    withPosts
} from 'react-wordpress-components'
import PostsComponent from '../ui/Posts'
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

    return (
        <div>
            {posts.map(post => (
                <div>{post.title}</div>
            ))}
        </div>
    )
}

export default connectPosts(withPosts()(Posts))

function MyPage() {
    return (
        <WordPressProvider baseUrl="https://example.com">
            <PostsProvider>
                <Posts />
            </PostsProvider>
        </WordPressProvider>
    )
}
```

[travis-url]: https://travis-ci.com/Gmulti/react-wordpress-components
