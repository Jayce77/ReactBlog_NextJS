import React from 'react'
import BaseLayout from '../components/layouts/base-layout'
import BasePage from '../components/base-page'

class About extends React.Component {

  render() {
    return (
      <div>
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <p>this is the about page</p>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default About