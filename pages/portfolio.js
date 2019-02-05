import React from 'react'
import { withRouter } from 'next/router'
import BaseLayout from '../components/layouts/base-layout'

class Portfolio extends React.Component {

  render() {
    return (
      <div>
        <BaseLayout>
          <p>this is the Portfolio page</p>
          <p>{ this.props.router.query.id }</p>
        </BaseLayout>
      </div>
    )
  }
}

export default withRouter(Portfolio)