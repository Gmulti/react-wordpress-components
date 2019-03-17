import React from 'react'

import { storiesOf } from '@storybook/react'
import WordPressProvider from '../packages/wordpress-api/WordPressProvider'
import Post from '../packages/wordpress-components/components/Post'

storiesOf('Welcome', module).add('React WordPress Components', () => (
    <h1>Welcome to React WordPress Components</h1>
))

storiesOf('Post', module).add('with text', () => (
    <WordPressProvider baseUrl="http://essential-dev-skills.com">
        <Post />
    </WordPressProvider>
))
