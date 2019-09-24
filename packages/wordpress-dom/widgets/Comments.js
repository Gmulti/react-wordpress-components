import React, { useEffect } from 'react'
import { connectComments } from '../../wordpress-api/connectors/connectComments'
import {
    withCommentsProvider,
    withComments
} from '../../wordpress-context/withComments'
import CommentsComponent from '../components/Comments'
import { isNull } from 'lodash'

const Comments = props => {
    const {
        commentsContext: { dispatch, comments },
        getServiceCommentsApi
    } = props
    useEffect(() => {
        const fetchData = async () => {
            const comments = await getServiceCommentsApi().all()
            if (!isNull(comments)) {
                dispatch({ type: 'addMany', payload: comments })
            }
        }

        fetchData()
    }, [])
    console.log(props)
    return <CommentsComponent items={comments} {...props} />
}

export default connectComments(withCommentsProvider()(withComments()(Comments)))
