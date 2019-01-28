import React from 'react'
import BaseLayout from '../components/layouts/base-layout'
import axios from 'axios'

class Index extends React.Component {

  static async getInitialProps() {
    let userData = {}
    
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      userData = response.data
    } catch(err) {
      console.log(err)
    }
    return { userData }
  }

  constructor(props) {
    super(props);
  }

  render() {
    const intialData = this.props.userData
    console.log(intialData)

    return(
      <div>
        <BaseLayout>
          <p>Hello Next.js</p>
        </BaseLayout>
      </div>
    )
  } 
    
}

export default Index