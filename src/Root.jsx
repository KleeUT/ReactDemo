require('bootstrap-webpack');
const React = require('react');

const Root = React.createClass({
    getInitialState(){
        return {items:['item1', 'item2']};
    },
    render(){
        return (
            <div className="container">
                <h1>Root Element</h1>
                <ul className="list-group">
                    {this.state.items.map((item)=>{
                        return (<li className="list-group-item">{item}</li>)
                    })}
                </ul>
            </div>);
    }
});

module.exports = Root;