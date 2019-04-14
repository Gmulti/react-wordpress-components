# React WordPress Components

[![Travis](https://img.shields.io/travis/com/Gmulti/react-wordpress-components/master.svg?style=for-the-badge)][travis-url]
[travis-url]: https://travis-ci.com/Gmulti/react-wordpress-components

> This library manages generic components related to the WordPress API

---

## Getting started

```sh
npm run storybook
```

### Example

```js
import React, { Component } from 'react'
import { WordPressProvider, Posts } from 'react-wordpress-components'

class MyPage extends Component {
    render() {
        return (
            <div>
                <WordPressProvider baseUrl="https://example.com">
                    <Posts />
                </WordPressProvider>
            </div>
        )
    }
}

// View :
// <ul>
//     <li>Post Title 1</li>
//     <li>Post Title 2</li>
//     <li>Post Title 3</li>
// </ul>
```

### Custom view

```js
import React, { Component } from 'react'
import { connectPosts } from 'react-wordpress-components'

const Posts = connectPosts(({ posts }) => (
    <div>
        {posts.map((post, key) => (
            <div key={key}>{post.title.rendered}</div>
        ))}
    </div>
))

class MyPage extends Component {
    render() {
        return (
            <div>
                <Posts />
            </div>
        )
    }
}

// View :
// <div>
//     <div>Post Title 1</div>
//     <div>Post Title 2</div>
//     <div>Post Title 3</div>
// </div>
```
