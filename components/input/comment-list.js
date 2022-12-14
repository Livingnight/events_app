import classes from './comment-list.module.css'
import React from 'react'

export default function CommentList(props) {
  const {items} = props

  return (
    <ul className={classes.comments}>
      {/* {Render list of comments - fetched from api} */}
      {items.map( item => (
        <li key={item._id}>
          <p>{item.comment}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  )
}
