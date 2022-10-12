import classes from './newsletter-registration.module.css'
import React from 'react'

export default function NewsletterRegistration() {
  function registrationHandler(event) {
    event.preventDefault()
  }
  return (
    <section className={classes.newsletter}>
      <h2 className={classes.h2}>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id='email'
            placeholder='Your Email'
            aria-label='Your Email'
          />
        </div>
        <button>Register</button>
      </form>
    </section>
  )
}
