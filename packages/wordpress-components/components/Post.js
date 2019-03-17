import React, { Component } from 'react'
import connectPost from '../../wordpress-core/connectors/connectPost'

@connectPost()
class Post extends Component {
    render() {
        return <p>Post</p>
    }
}

export default Post
