import React, { Component } from 'react'
import { WordPressProviderContext } from './context/WordPressProviderContext'

class WordPressProvider extends Component {
    render() {
        return (
            <WordPressProviderContext.Provider
                value={{
                    baseUrl: this.props.baseUrl,
                    data: this.props.data || null
                }}
            >
                {this.props.children}
            </WordPressProviderContext.Provider>
        )
    }
}

export default WordPressProvider
