const React = require('react');
var TextBoxDemo = React.createClass({
    getInitialState(){
        return { box1Text:"", box2Text:"", box3Text:"" }
    },
    box1Change(e){
        console.log(e.target.value);
    },
    box2Change(e){
        console.log(e.target.value);
        this.setState({box2Text:e.target.value});  
    },
    box3Change(e){
        this.setState({box3Text:e.target.value});    
    },
    alertBox1(){
        alert(this.state.box1Text);  
    },
    alertBox2(){
        alert(this.state.box2Text);    
    },
    alertBox3(){
        alert(this.state.box3Text);    
    },
    clear1(){
        console.log("Clear 1");
        this.setState({box1Text:""});
    },
    clear2(){
        console.log("Clear 2");
        this.setState({box2Text:""});
    },
    clear3(){
        console.log("Clear 3");
        this.setState({box3Text:""});
    },
    render(){
        return (
            <div>
                <h1>Interacting with text boxes</h1>
                <hr />
                <div>input
                    <input type="text" onChange={this.box1Change} value={this.state.box1Text} placeholder="Box 1"/>
                    <button onClick={this.alertBox1}>Alert</button><button onClick={this.clear}>Clear</button>
                </div>
                <hr />
                <div>
                    <input type="text" onChange={this.box2Change} value={this.state.box2Text} placeholder="Box 2"/>
                    <button onClick={this.alertBox2} >Alert</button><button onClick={this.clear2}>Clear</button>
                </div>
                <hr />
                <div>
                    <input type="text" onChange={this.box3Change} placeholder="Box 3"/>
                    <button onClick={this.alertBox3} >Alert</button><button onClick={this.clear3}>Clear</button>
                </div>
            </div>
        )
    }
});

module.exports = TextBoxDemo;