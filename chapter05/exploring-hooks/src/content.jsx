class Content extends React.Component {
    componentWillMount() {
        console.log(ReactDOM.findDOMNode(this));
    }
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this));
    }
    render() {
        return <div></div>
    }
}