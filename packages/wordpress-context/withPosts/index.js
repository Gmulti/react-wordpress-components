import React, { useContext, useReducer, createContext } from 'react'
import { reducer, initialState } from '../reducers/posts'
export const PostsContext = createContext([])

export const withPosts = () => ComposedComponent => {
    return props => {
        const {
            state: { posts, offset },
            dispatch
        } = useContext(PostsContext)

        return (
            <ComposedComponent
                {...props}
                postsContext={{
                    posts,
                    dispatch,
                    offset
                }}
            />
        )
    }
}

export const PostsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <PostsContext.Provider value={{ state, dispatch }}>
            {children}
        </PostsContext.Provider>
    )
}

export const withPostsProvider = () => ComposedComponent => {
    return props => {
        return (
            <PostsProvider>
                <ComposedComponent {...props} />
            </PostsProvider>
        )
    }
}

export default {
    withPosts,
    withPostsProvider,
    PostsProvider
}
