import React, { Component } from 'react'
import connectWordPress from '../../wordpress-api/connectWordPress'

const connectPost = ConnectedComposed => {
    @connectWordPress()
    class connectPost extends Component {
        getComposedProps = () => {
            return {}
        }

        render() {
            return <ConnectedComposed {...this.getComposedProps()} />
        }
    }

    return connectPost
}

export default () => {
    return target => connectPost(target)
}
