const React = require('react');
const ReactDom = require('react-dom');



var HelloWorld = React.createClass({
    render(){
        return (<div><h1>Hello World</h1></div>);
    }
});


ReactDom.render(
    <HelloWorld />,
    document.getElementById('main')
);