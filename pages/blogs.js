import React from 'react'
import BaseLayout from '../components/layouts/base-layout'
import BasePage from '../components/base-page'

class Blog extends React.Component {

  render() {
    return(
      <div>
        <BaseLayout>
          <BasePage>
            <p>this is the blogs page</p>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default Blog