import React, { Component } from 'react'
import { WordPressContext } from './WordPressProvider'

const connectWordPress = ComposedComponent => {
    return class extends Component {
        render() {
            return (
                <WordPressContext.Consumer>
                    {props => <ComposedComponent {...props} />}
                </WordPressContext.Consumer>
            )
        }
    }
}

export default () => {
    return target => connectWordPress(target)
}
