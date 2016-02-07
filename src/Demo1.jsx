const React = require('react');
const ReactDom = require('react-dom');



var HelloWorld = React.createClass({
    render(){
        console.log('rendering hello world');
        return (<div><h1>Hello World</h1></div>);
    }
});

console.log('Hello World created');

ReactDom.render(
    <HelloWorld />,
    document.getElementById('main')
);

console.log('done');