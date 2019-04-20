import React from 'react'
import { connectCategories } from '../../wordpress-api/connectors/connectCategories'
import CategoriesComponent from '../components/Categories'

const Categories = props => <CategoriesComponent {...props} />

export default connectCategories(Categories)
