const React = require('react');
const Styles = {
    textBox:{
        valid:{
            "bordeColor":"#0F0"
        },
        invalid:{
            "backgroundColor":"#FDD",
            "borderColor": "#F00"
        }    
    }
};
module.exports = React.createClass({
    displayName : "NewNewsItemForm",
    getInitialState(){
      return {text:"", errorMessage:""};  
    },
    textChanged(e){
        var text = e.target.value;
        var invalid = text === "";
        this.setState({ text: text, invalid: invalid, errorMessage: invalid ? "Please enter text": "" });
    },
    add(){
        this.setState({ text: ""});
        console.log(this.state.text);
        this.props.onAdd(this.state.text);         
    },
    submit(e){
        console.log("submit")
        e.preventDefault();
        this.add();
    },
    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <input type="text" onChange={this.textChanged} value={this.state.text} style={this.state.invalid ? Styles.textBox.invalid : Styles.textBox.valid} className="form-control" id="itemInput"/>
                        <label>{this.state.errorMessage} </label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>);
   } 
});