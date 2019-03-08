import React from 'react'
import { withRouter } from 'next/router'
import axios from 'axios'
import BaseLayout from '../components/layouts/base-layout'
import BasePage from '../components/base-page'

class Portfolio extends React.Component {

  static async getInitialProps({ query }) {
    const portfolioId = query.id
    
    let portfolio = {}

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`)
      portfolio = response.data
    } catch (err) {
      console.error(err)
    }
    return { portfolio }
  }
  
  render() {
    const { portfolio } = this.props

    return (
      <div>
        <BaseLayout>
          <BasePage {...this.props.auth}>
            <h1>{ portfolio.title }</h1>
            <p>Body: { portfolio.body }</p>
            <p>Id: { portfolio.id }</p>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default withRouter(Portfolio)