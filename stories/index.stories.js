import React from 'react'

import { storiesOf } from '@storybook/react'
import WordPressProvider from '../packages/wordpress-api/WordPressProvider'
import WidgetPosts from '../packages/wordpress-dom/widgets/Posts'
import WidgetCategories from '../packages/wordpress-dom/widgets/Categories'

storiesOf('Welcome', module).add('React WordPress Components', () => (
    <h1>Welcome to React WordPress Components</h1>
))

storiesOf('Widgets', module)
    .add('Posts', () => (
        <WordPressProvider baseUrl="https://essential-dev-skills.com">
            <WidgetPosts />
        </WordPressProvider>
    ))
    .add('Categories', () => (
        <WordPressProvider baseUrl="https://essential-dev-skills.com">
            <WidgetCategories />
        </WordPressProvider>
    ))
