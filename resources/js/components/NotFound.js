import React from 'react'
import { Result, Button } from 'antd'

const NotFound = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={() => window.history.back()}>Go Back</Button>}
      />
    </div>
  )
}

export default NotFound
