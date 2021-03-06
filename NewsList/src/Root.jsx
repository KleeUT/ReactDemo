require('bootstrap-webpack');
const React = require('react');
const NewsItem = require('./NewsItem.jsx');
const NewNewsItemForm = require('./NewNewsItemForm.jsx');
const Root = React.createClass({
    getInitialState(){
        return {items:[]};
    },
    addNewNewsItem(newsItem){
        var data = this.state.items;
        data.push({key:newsItem, value: newsItem});
        this.setState({items:data})
    },
    render(){
        return (
            <div className="container">
                <h1>NCGAU March News</h1>
                <NewNewsItemForm onAdd={this.addNewNewsItem}/>
                
                <ul className="list-group">
                    {this.state.items.map((item)=>{
                        return (<li className="list-group-item" key={item.key}>
                        <NewsItem item={item.value} />
                        </li>)
                    })}
                </ul>
            </div>);
    }
});

module.exports = Root;