export const initialState = { posts: [], offset: 0 }

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'addMany':
            return {
                ...state,
                posts: [...state.posts, ...payload],
                offset: state.offset + payload.length
            }
        case 'add':
            return {
                ...state,
                posts: [...state.posts, payload],
                offset: state.offset++
            }
    }
}

export default {
    reducer,
    initialState
}
