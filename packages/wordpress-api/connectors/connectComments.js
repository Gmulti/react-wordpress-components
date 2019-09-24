import React, { Component } from 'react'
import connectWordPress from './connectWordPress'
import Comments from '../services/Comments'
import { isNull } from 'lodash'

export const connectComments = ConnectedComposed => {
    @connectWordPress()
    class ConnectorComments extends Component {
        serviceCommentsApi = null

        getServiceCommentsApi = () => {
            if (!isNull(this.serviceCommentsApi)) {
                return this.serviceCommentsApi
            }

            const { baseUrl } = this.props
            this.serviceCommentsApi = new Comments({
                baseUrl
            })

            return this.serviceCommentsApi
        }

        getComposedProps = () => {
            return {
                getServiceCommentsApi: this.getServiceCommentsApi
            }
        }

        render() {
            return <ConnectedComposed {...this.getComposedProps()} />
        }
    }

    return ConnectorComments
}

export default () => {
    return target => connectComments(target)
}
