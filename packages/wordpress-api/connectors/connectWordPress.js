import React, { Component } from 'react'
import { WordPressProviderContext } from '../context/WordPressProviderContext'

export const connectWordPress = ComposedComponent => {
    return class extends Component {
        render() {
            return (
                <WordPressProviderContext.Consumer>
                    {props => {
                        return <ComposedComponent {...props} />
                    }}
                </WordPressProviderContext.Consumer>
            )
        }
    }
}

export default () => {
    return target => connectWordPress(target)
}
