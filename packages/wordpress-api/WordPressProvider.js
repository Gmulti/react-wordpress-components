import React, { Component } from 'react'
import { WordPressContext } from './context/WordPressContext'

class WordPressProvider extends Component {
    render() {
        return (
            <WordPressContext.Provider
                value={{
                    baseUrl: this.props.baseUrl
                }}
            >
                {this.props.children}
            </WordPressContext.Provider>
        )
    }
}

export default WordPressProvider
