import React from 'react'
import Link from 'next/link'
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse
} from 'reactstrap'
import auth0 from '../../services/auth0'

const BsNavLink = ({ route, title }) => (
  <Link href={route}>
    <a className="nav-link port-navbar-link"> {title} </a>
  </Link>
)

const Login = () => {
  return (
    <span onClick={ auth0.login } className="nav-link port-navbar-link clickable">Login</span>
  )
}

const Logout = () => {
  return (
    <span className="nav-link port-navbar-link clickable">Logout</span>
  )
}

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Jayce Crowther</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route={"/"} title={'Home'} />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route={"/about"} title={'About'} />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route={"/portfolios"} title={'Portfolios'} />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink route={"/blogs"} title={'Blog'} />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route={"/cv"} title={'CV'} />
            </NavItem>
            <NavItem className="port-navbar-item">
              <Login />
            </NavItem>
            <NavItem className="port-navbar-item">
              <Logout />
            </NavItem>
          </Nav>
        </Collapse>
        
        </Navbar>
        
        
        
        <style jsx>
          {`
            a {
              font-size: 20px
            }
          `}
        </style>
      </div>
    )
  }
}

export default Header