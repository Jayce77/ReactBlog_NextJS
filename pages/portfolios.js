import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import BaseLayout from '../components/layouts/base-layout'

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
        <li> 
          <Link as={`/portfolio/${post.id}`} href={`/portfolio?id=${post.id}`}>
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
        <BaseLayout>
          <p>this is the Portfolios page</p>
          <ul>
            { this.renderPosts(posts)}
          </ul>
        </BaseLayout>
      </div>
    )
  }
}

export default Portfolios