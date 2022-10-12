import classes from './new-comment.module.css'
import React, { useRef, useState } from 'react'

export default function NewComment() {

  const [isInvalid, setIsInvalid] = useState(false)

  const emailInputRef = useRef()
  const commentInputRef = useRef()
  
  function submitHandler(event) {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredComment = commentInputRef.current.valu

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true)
      return
    }

    props.onAddComment({
      email: enteredEmail,
      comment: enteredComment
    })
  }
  return (
    <form className={classes.form}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Name</label>
          <input type="email" ref={emailInputRef} id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type="text" id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='comment'>Your Name</label>
          <textarea id='name' rows='5' ref={commentInputRef}></textarea>
        </div>
        {isInvalid && <p>Please enter a valid email address and comment!</p>}
        <button>Submit</button>
      </div>
    </form>
  )
}
