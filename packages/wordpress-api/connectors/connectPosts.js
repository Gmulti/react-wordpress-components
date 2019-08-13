import React, { Component } from 'react'
import connectWordPress from './connectWordPress'
import Posts from '../services/Posts'
import { isNull } from 'lodash'

export const connectPosts = ConnectedComposed => {
    @connectWordPress()
    class ConnectorPost extends Component {
        servicePostsApi = null

        getServicePostsApi = () => {
            if (!isNull(this.servicePostsApi)) {
                return this.servicePostsApi
            }

            const { baseUrl } = this.props
            this.servicePostsApi = new Posts({
                baseUrl
            })

            return this.servicePostsApi
        }

        getComposedProps = () => {
            return {
                getServicePostsApi: this.getServicePostsApi
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
