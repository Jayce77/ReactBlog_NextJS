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

const BsNavLink = ({ route, title }) => (
  <Link href={route}>
    <a className="nav-link"> {title} </a>
  </Link>
)

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
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Jayce Crowther</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <BsNavLink route={"/"} title={'Home'} />
            </NavItem>
            <NavItem>
              <BsNavLink route={"/about"} title={'About'} />
            </NavItem>
            <NavItem>
              <BsNavLink route={"/portfolios"} title={'Portfolios'} />
            </NavItem>
            <NavItem>
                <BsNavLink route={"/blogs"} title={'Blog'} />
            </NavItem>
            <NavItem>
              <BsNavLink route={"/cv"} title={'CV'} />
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