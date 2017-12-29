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
  React.createElement(HelloWorld, {
    id: 'madeup',
    frameworkname: 'madeup.js',
    title: 'A crap framework I just invented in my head.' }),
  React.createElement(HelloWorld, {
    id: 'ember',
    frameworkname: 'Ember.js',
    title: 'A framework for creating ambitious web applications.' }),
  React.createElement(HelloWorld, {
    id: 'backbone',
    frameworkname: 'Backbone.js',
    title: 'Backbone.js gives structure to web applications...' }),
  React.createElement(HelloWorld, {
    id: 'angular',
    frameworkname: 'I dunno',
    title: 'i dunno' }),
  React.createElement(GoodbyeWorld, {
    butt: 'bored' })
), document.getElementById('content'));
