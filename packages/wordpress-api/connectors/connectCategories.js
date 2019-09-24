import React, { Component } from 'react'
import connectWordPress from './connectWordPress'
import Categories from '../services/Categories'
import { isNull } from 'lodash'

export const connectCategories = ConnectedComposed => {
    @connectWordPress()
    class ConnectorCategories extends Component {
        serviceCategoriesApi = null

        getServiceCategoriesApi = () => {
            if (!isNull(this.serviceCategoriesApi)) {
                return this.serviceCategoriesApi
            }

            const { baseUrl } = this.props
            this.serviceCategoriesApi = new Categories({
                baseUrl
            })

            return this.serviceCategoriesApi
        }

        getComposedProps = () => {
            return {
                getServiceCategoriesApi: this.getServiceCategoriesApi
            }
        }

        render() {
            return <ConnectedComposed {...this.getComposedProps()} />
        }
    }

    return ConnectorCategories
}

export default () => {
    return target => connectCategories(target)
}
