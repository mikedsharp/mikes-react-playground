class Content extends React.Component {
    componentWillMount() {
        console.log(ReactDOM.findDOMNode(this));
    }
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this));
    }
    render() {
        return React.createElement("div", null);
    }
}
class GoodbyeWorld extends React.Component {
    render() {
        let redText = { color: 'red', backgroundColor: 'grey' };
        let butt = this.props.butt;
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                { style: redText },
                'Goodbye world!'
            ),
            React.createElement(
                'h3',
                null,
                'Butt is ',
                butt ? butt : 'fine'
            )
        );
    }
}
class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      "h1",
      this.props,
      "Hello ",
      this.props.frameworkname,
      " world!!!"
    );
  }
}
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Content, null)
), document.getElementById('content'));
