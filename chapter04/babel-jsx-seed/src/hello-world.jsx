class HelloWorld extends React.Component {
    render() {
      return <h1 {...this.props}>Hello {this.props.frameworkname} world!!!</h1>
    }
  }