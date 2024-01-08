import React from 'react'
import CommentList from './CommentList'
import CommentWrite from './CommentWrite'

const CommentArea = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={props.className}>
            <CommentList />
            <CommentWrite />
        </div>
    )
})

export default CommentArea