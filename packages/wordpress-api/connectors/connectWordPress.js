import React, { Component } from 'react'
import { WordPressContext } from '../context/WordPressContext'

export const connectWordPress = ComposedComponent => {
    return class extends Component {
        render() {
            return (
                <WordPressContext.Consumer>
                    {props => {
                        return <ComposedComponent {...props} />
                    }}
                </WordPressContext.Consumer>
            )
        }
    }
}

export default () => {
    return target => connectWordPress(target)
}
