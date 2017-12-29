class GoodbyeWorld extends React.Component {
    render() {
        let redText = {color: 'red', backgroundColor: 'grey'};
        let butt = this.props.butt;
        return (
            <div>
                <h2 style={redText}>Goodbye world!</h2>
                <h3>Butt is {butt ? butt : 'fine'}</h3>
            </div>
        );
    }
}