import React, { Component } from 'react'
import connectWordPress from './connectWordPress'
import Categories from '../services/Categories'

export const connectCategories = ConnectedComposed => {
    @connectWordPress()
    class ConnectorCategories extends Component {
        categoriesApi = null

        state = {
            items: []
        }

        constructor(props) {
            super(props)

            this.categoriesApi = this.getCategoriesApi()
        }

        getCategoriesApi = () => {
            const { baseUrl } = this.props
            return new Categories({
                baseUrl
            })
        }

        getCategories = async () => {
            const items = await this.categoriesApi.all()
            this.setState({ items })
        }

        componentDidMount() {
            this.getCategories()
        }

        getComposedProps = () => {
            return {
                categoriesApi: this.categoriesApi,
                items: this.state.items
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
