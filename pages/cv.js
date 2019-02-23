import React from 'react'
import BaseLayout from '../components/layouts/base-layout'
import BasePage from '../components/base-page'

class CV extends React.Component {

  render() {
    return (
      <div>
        <BaseLayout>
          <BasePage>
            <p>this is the CV page</p>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default CV