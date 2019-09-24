export const initialState = { comments: [], offset: 0 }

export const reducer = (state, { type, payload }) => {
    console.log(payload)
    switch (type) {
        case 'addMany':
            return {
                ...state,
                comments: [...state.comments, ...payload],
                offset: state.offset + payload.length
            }
        case 'add':
            return {
                ...state,
                comments: [...state.comments, payload],
                offset: state.offset++
            }
    }
}

export default {
    reducer,
    initialState
}
