import React from 'react'
import { Result, Button } from 'antd'
import { withRouter } from 'react-router-dom'

const NotFound = ({ history }) => {
  const goBack = () => history.goBack()

  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={goBack}>Go Back</Button>}
      />
    </div>
  )
}

export default withRouter(NotFound)
