import React from 'react'
import BaseLayout from '../components/layouts/base-layout'
import { Button, Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <BaseLayout>
          <Container>
            <Button 
              color="danger">
              Danger!
            </Button>
          </Container>
        </BaseLayout>
      </div>
    )
  } 
    
}

export default Index