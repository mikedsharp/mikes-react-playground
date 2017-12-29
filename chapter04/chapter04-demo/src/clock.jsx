class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            currentTime: (new Date())
        };
    }
    launchClock() {
        setInterval(() => {
            this.setState({
                currentTime: (new Date())
            });
        }, 1000);
    }
    render() {
        return (
        <div>
            <DigitalDisplay time={this.state.currentTime.toLocaleString()}/>
            <AnalogueDisplay time={this.state.currentTime}/>
        </div>
        );
    }
}