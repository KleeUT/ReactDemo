const React = require('react');
const Root = React.createClass({
    getInitialState(){
        return {items:['item1', 'item2']};
    },
    render(){
        return (
            <div>
                <h1>Root Element</h1>
                <ul>
                    {this.state.items.map((item)=>{
                        return (<li>{item}</li>)
                    })}
                </ul>
            </div>);
    }
});

module.exports = Root;