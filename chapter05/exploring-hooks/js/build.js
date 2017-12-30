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
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            counter: 0,
            currenttime: new Date().toLocaleString()
        };
    }
    launchClock() {
        setInterval(() => {
            this.setState({
                counter: ++this.state.counter,
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
    }
    render() {
        if (this.state.counter > 2) return null;
        return React.createElement(Logger, { time: this.state.currentTime });
    }
}
class Logger extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    componentWillMount() {
        console.log('componentWillMount is triggered');
    }
    componentDidMount(e) {
        console.log('componentDidMount is triggered');
        console.log('DOM Node: ', ReactDOM.findDOMNode(this));
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps is triggered');
        console.log('new props ', newProps);
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate is triggered');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
        return true;
    }
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate is triggered');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate is triggered');
        console.log('old props: ', oldProps);
        console.log('old state: ', oldState);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return React.createElement(
            'span',
            null,
            this.props.time
        );
    }

}
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Content, null)
), document.getElementById('content'));
