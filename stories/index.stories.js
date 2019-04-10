import React from 'react'

import { storiesOf } from '@storybook/react'
import WordPressProvider from '../packages/wordpress-api/WordPressProvider'
import Posts from '../packages/wordpress-dom/widgets/Posts'

storiesOf('Welcome', module).add('React WordPress Components', () => (
    <h1>Welcome to React WordPress Components</h1>
))

storiesOf('Post', module).add('with text', () => (
    <WordPressProvider baseUrl="https://essential-dev-skills.com">
        <Posts />
    </WordPressProvider>
))
