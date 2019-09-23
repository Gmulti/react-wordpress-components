import React, { Component } from 'react'
import connectWordPress from './connectWordPress'
import { isNull } from 'lodash'
import CustomPostType from '../services/CustomPostType'

export const connectCustomPostType = (postType, ConnectedComposed) => {
    @connectWordPress()
    class ConnectorPost extends Component {
        serviceApi = null

        getServiceApi = () => {
            if (!isNull(this.serviceApi)) {
                return this.serviceApi
            }

            const { baseUrl } = this.props
            this.serviceApi = new CustomPostType(
                {
                    baseUrl
                },
                postType
            )

            return this.serviceApi
        }

        getComposedProps = () => {
            return {
                getServiceApi: this.getServiceApi
            }
        }

        render() {
            return <ConnectedComposed {...this.getComposedProps()} />
        }
    }

    return ConnectorPost
}

export default postType => {
    return target => connectCustomPostType(postType, target)
}
