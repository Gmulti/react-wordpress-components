import React from 'react'

import { storiesOf } from '@storybook/react'
import WordPressProvider from '../packages/wordpress-api/WordPressProvider'
import Posts from '../packages/wordpress-dom/widgets/Posts'
import Comments from '../packages/wordpress-dom/widgets/Comments'

storiesOf('Welcome', module).add('React WordPress Components', () => (
    <h1>Welcome to React WordPress Components</h1>
))

storiesOf('Post', module).add('widget', () => (
    <WordPressProvider baseUrl="https://essential-dev-skills.com">
        <Posts />
    </WordPressProvider>
))

storiesOf('Comment', module).add('widget', () => (
    <WordPressProvider baseUrl="https://essential-dev-skills.com">
        <Comments />
    </WordPressProvider>
))
