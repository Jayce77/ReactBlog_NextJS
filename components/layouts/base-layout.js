import Header from '../shared/header'

const BaseLayout = (props) => {
  return (
    <div>
      <Header />
      { props.children }
    </div>
  )
}

export default BaseLayout