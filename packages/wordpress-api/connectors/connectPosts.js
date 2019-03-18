import React, { Component, useState } from 'react'
import connectWordPress from './connectWordPress'
import Posts from '../services/Posts'

const connectPosts = ConnectedComposed => {
    @connectWordPress()
    class connectPosts extends Component {
        postsApi = null

        state = {
            posts: []
        }

        getPostsApi = () => {
            const { baseUrl } = this.props
            return new Posts({
                baseUrl
            })
        }

        getPosts = async () => {
            const posts = await this.getPostsApi().all()

            this.setState({ posts })
        }

        componentDidMount() {
            this.getPosts()
        }

        getComposedProps = () => {
            return {
                postsApi: this.getPostsApi(),
                posts: this.state.posts
            }
        }

        render() {
            return <ConnectedComposed {...this.getComposedProps()} />
        }
    }

    return connectPosts
}

export default () => {
    return target => connectPosts(target)
}
