import { useReducer } from 'react'
import { reducer, initialState } from '../reducers/posts'

const withPosts = () => ComposedComponent => {
    return props => {
        const [state, dispatch] = useReducer(reducer, initialState)

        return (
            <PostsContext.Provider value={{ state, dispatch }}>
                <ComposedComponent {...props} />
            </PostsContext.Provider>
        )
    }
}

export default withPosts
