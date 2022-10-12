import classes from './comment-list.module.css'
import React from 'react'

export default function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* {Render list of comments - fetched from api} */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximillian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximillian</address>
        </div>
      </li>
    </ul>
  )
}
