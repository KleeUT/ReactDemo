const React = require('react');
const ReactDom = require('react-dom');

var HelloWorld = React.createClass({
    render(){
        return (<div>
            <h1>Hello {this.props.name}</h1>
        </div>)
    }
});

ReactDom.render(
    <HelloWorld name={"NCGAU"}/>,
    document.getElementById('main')
);