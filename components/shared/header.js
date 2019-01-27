import React from 'react'
import Link from 'next/link'

class Header extends React.Component {

  render() {
    return (
      <div>
        <Link href="/">
          <a> Home </a>
        </Link>
        <Link href="/about">
          <a> About </a>
        </Link>
        <Link href="/portfolios">
          <a> Portfolios </a>
        </Link>
        <Link href="/blogs">
          <a> Blog </a>
        </Link>
        <Link href="/cv">
          <a> CV </a>
        </Link>
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