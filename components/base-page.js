import { Container } from 'reactstrap'
import PropTypes from 'prop-types'

const BasePage = ({ children, className }) => (

  <div className={"base-page " + className }>
    <Container>
      { children }
    </Container>
  </div>
)

BasePage.defaultProps = {
  className: ''
}

BasePage.propTypes = {
  children: PropTypes.element.isRequired
}

export default BasePage