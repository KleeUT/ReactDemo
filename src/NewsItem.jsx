const React = require('react');
var NewsItem = React.createClass({
    getInitialState(){
        return {item:this.props.item}
    },
    componentDidMount(){
      console.log(`Mounting ${this.state.item}`)  
    },
    render(){
        console.log(`Rendering News Item ${this.state.item}`);
        return (
            <div>
                <h2>{this.props.item}</h2>
                {this.state.item}
            </div>)
    }
});

module.exports = NewsItem;