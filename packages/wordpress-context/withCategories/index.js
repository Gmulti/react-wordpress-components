import React, { useContext, useReducer, createContext } from 'react'
import { reducer, initialState } from '../reducers/categories'
export const CategoriesContext = createContext([])

export const withCategories = () => ComposedComponent => {
    return props => {
        const {
            state: { categories, offset },
            dispatch
        } = useContext(CategoriesContext)

        return (
            <ComposedComponent
                {...props}
                categoriesContext={{
                    categories,
                    dispatch,
                    offset
                }}
            />
        )
    }
}

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CategoriesContext.Provider value={{ state, dispatch }}>
            {children}
        </CategoriesContext.Provider>
    )
}

export const withCategoriesProvider = () => ComposedComponent => {
    return props => {
        return (
            <CategoriesProvider>
                <ComposedComponent {...props} />
            </CategoriesProvider>
        )
    }
}

export default {
    withCategories,
    withCategoriesProvider,
    CategoriesProvider
}
