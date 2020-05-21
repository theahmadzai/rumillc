import React from 'react'

const Subscribe = () => {
  return (
    <div className="app-subscribe">
      <form>
        <input type="email" placeholder="example@mail.com" />
        <input type="submit" value="subscribe" />
      </form>
    </div>
  )
}

export default React.memo(Subscribe)
