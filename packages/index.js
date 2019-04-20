import WordPressProvider from './wordpress-api/WordPressProvider'

import connectWordPress from './wordpress-api/connectors/connectWordPress'
import connectPosts from './wordpress-api/connectors/connectPosts'
import connectCategories from './wordpress-api/connectors/connectCategories'

import WidgetPosts from './wordpress-dom/widgets/Posts'
import WidgetCategories from './wordpress-dom/widgets/Categories'

export const library = {
    WordPressProvider,
    WidgetPosts,
    WidgetCategories,
    connectWordPress,
    connectPosts,
    connectCategories
}

export default library
