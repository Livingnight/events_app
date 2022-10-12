import classes from './comments.module.css'
import React, { useEffect, useState } from 'react'

import CommentList from './comment-list'
import NewComment from './new-comment'

export default function Comments(props) {
  const { eventId } = props

  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (showComments) {
      fetch('/api/comments/' + eventId)
        .then( response => response.json())
        .then(data => {
          setComments(data.comments)
        })
    }
  }, [showComments])

  function toggleCommentsHandler() {
    setShowComments(prevStatus => !prevStatus)
  }

  function addCommentHandler(commentData) {
    // send data to API
    console.log(commentData)
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  )
}
