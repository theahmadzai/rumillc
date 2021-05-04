import React from 'react'
import * as styles from './subscribe.module.css'

export default function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <form
        data-netlify="true"
        method="post"
        name="subscribers"
        className={styles.form}
      >
        <input
          type="email"
          name="email"
          placeholder="example@mail.com"
          className={styles.input}
        />
        <input type="submit" value="subscribe" className={styles.button} />
      </form>
    </div>
  )
}
