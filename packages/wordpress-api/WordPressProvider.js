import React, { Component } from 'react'

export const WordPressContext = React.createContext()

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
