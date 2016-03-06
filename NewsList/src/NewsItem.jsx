const React = require('react');
var NewsItem = React.createClass({
    render(){
        return (
            <div>
                <h2>{this.props.item}</h2>
            </div>)
    }
});

module.exports = NewsItem;