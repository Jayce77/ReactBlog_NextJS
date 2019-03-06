import React from 'react'
import auth0Client from '../services/auth0'
import { withRouter } from 'next/router'
import BaseLayout from '../components/layouts/base-layout'
import BasePage from '../components/base-page'

class Callback extends React.Component {

  async componentDidMount() {
    await auth0Client.handleAuthentication()
    this.props.router.push('/')
  }
  
  render() {
    return(
      <div>
        <BaseLayout>
          <BasePage>
            <h1>Verifying login data...</h1>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default withRouter(Callback)