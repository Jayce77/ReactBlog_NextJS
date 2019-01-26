import Link from 'next/link'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link href="/">
      <a> Home </a>
    </Link>
    <Link href="/about">
      <a> About </a>
    </Link>
    <Link href="/blogs">
      <a> Blog </a>
    </Link>
    <Link href="/cv">
      <a> CV </a>
    </Link>
    <Link href="/portfolios">
      <a> Portfolios </a>
    </Link>
  </div>
)

export default Index