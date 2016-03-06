var React = require('react');
var ReactDOM = require('react-dom');
var rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, "Klee Thomas"),
        React.createElement('a', {href: 'kleeut.com'}, "kleeut.com")
      )
    ),
    React.createElement('p',{},"No one uses this.  I find it messy and complex compared to the JSX syntax.")
  )

ReactDOM.render(rootElement, document.getElementById('main'));

