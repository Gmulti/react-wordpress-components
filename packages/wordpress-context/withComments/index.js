import React, { useContext, useReducer, createContext } from 'react'
import { reducer, initialState } from '../reducers/comments'
export const CommentsContext = createContext([])

export const withComments = () => ComposedComponent => {
    return props => {
        const {
            state: { comments, offset },
            dispatch
        } = useContext(CommentsContext)

        return (
            <ComposedComponent
                {...props}
                commentsContext={{
                    comments,
                    dispatch,
                    offset
                }}
            />
        )
    }
}

export const CommentsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CommentsContext.Provider value={{ state, dispatch }}>
            {children}
        </CommentsContext.Provider>
    )
}

export const withCommentsProvider = () => ComposedComponent => {
    return props => {
        return (
            <CommentsProvider>
                <ComposedComponent {...props} />
            </CommentsProvider>
        )
    }
}

export default {
    withComments,
    withCommentsProvider,
    CommentsProvider
}
