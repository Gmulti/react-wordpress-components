import React, { useEffect } from 'react'
import { connectCategories } from '../../wordpress-api/connectors/connectCategories'
import {
    withCategoriesProvider,
    withCategories
} from '../../wordpress-context/withCategories'
import CategoriesComponent from '../components/Categories'
import { isNull } from 'lodash'

const Categories = props => {
    const {
        categoriesContext: { dispatch, categories },
        getServiceCategoriesApi
    } = props
    useEffect(() => {
        const fetchData = async () => {
            const categories = await getServiceCategoriesApi().all()
            if (!isNull(categories)) {
                dispatch({ type: 'addMany', payload: categories })
            }
        }

        fetchData()
    }, [])
    console.log(props)
    return <CategoriesComponent items={categories} {...props} />
}

export default connectCategories(
    withCategoriesProvider()(withCategories()(Categories))
)
