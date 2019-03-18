import React, { Component } from 'react'
import connectWordPress from './connectWordPress'
import Posts from '../services/Posts'

export const connectPosts = ConnectedComposed => {
    @connectWordPress()
    class ConnectorPost extends Component {
        postsApi = null

        state = {
            posts: []
        }

        constructor(props) {
            super(props)

            this.postsApi = this.getPostsApi()
        }

        getPostsApi = () => {
            const { baseUrl } = this.props
            return new Posts({
                baseUrl
            })
        }

        getPosts = async () => {
            const posts = await this.postsApi.all()
            this.setState({ posts })
        }

        componentDidMount() {
            this.getPosts()
        }

        getComposedProps = () => {
            return {
                postsApi: this.postsApi,
                posts: this.state.posts
            }
        }

        render() {
            return <ConnectedComposed {...this.getComposedProps()} />
        }
    }

    return ConnectorPost
}

export default () => {
    return target => connectPosts(target)
}
