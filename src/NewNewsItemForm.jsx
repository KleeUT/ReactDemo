const React = require('react');

module.exports = React.createClass({
    displayName : "NewNewsItemForm",
    getInitialState(){
      return {text:""};  
    },
    textChanged(e){
        this.setState({text:e.target.value});
    },
    add(){
        console.log(`adding ${this.state.text}`);
        this.props.onAdd(this.state.text);         
    },
    render(){
        console.log(`rendering NewNewsItemForm`);
       return(
            <div>
            <form onSubmit={this.add} >
            <div className="form-group">
                <input type="text" onChange={this.textChanged} className="form-control"/>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
            </div>);
   } 
});