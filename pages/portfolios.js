import React from 'react'
import axios from 'axios'
import BaseLayout from '../components/layouts/base-layout'
import BasePage from '../components/base-page'
import { Link } from '../routes'

class Portfolios extends React.Component {
  
  static async getInitialProps() {
    let posts= []
    
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = response.data
    } catch(err) {
      console.log(err)
    }
    return { posts: posts.slice(0, 10) }
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li key={post.id}> 
          <Link route={`/portfolio/${post.id}`}>
            <a>{post.title}</a> 
          </Link>
        </li>
      )
    })  
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <p>this is the Portfolios page</p>
            <ul>
              { this.renderPosts(posts)}
            </ul>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default Portfolios