let inputValue = 'Texas';
class AntiPattern extends React.Component {
    render() {
        this.inputValue = 'South Africa';
        return (
            <div>
                {this.props.inputValue}
                {inputValue}
                {this.inputValue}
            </div>
        );
    }
}