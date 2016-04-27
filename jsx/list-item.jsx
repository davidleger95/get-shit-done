var React = require('react');
var Button = require('./button');
var rootURL = "https://shining-heat-6642.firebaseio.com/";

module.exports = React.createClass({

    getInitialState: function(){
        return {
            text: this.props.item.text,
            date: this.props.item.date,
            done: this.props.item.done
        }
    },
    componentWillMount: function(){
        this.fb = new Firebase(rootURL + 'items/' + this.props.item.key);
    },
    render: function(){
        //alert(!this.state.done);
        return <li className={ "list-item " + (this.state.done ? "complete":"active") }>
            <div className="check">
                <img onClick={this.handleCheck}
                     className="icon icon-check"
                     src={ "img/check-" + (this.state.done ? "color":"grey") + ".svg"} />
            </div>
            {this.state.text}
            <button className="trash"
                    onClick={this.handleDelete}>
            <img className="icon icon-plus"
                 src="img/trash.svg" />
            </button>
        </li>
    },
    handleCheck: function(){
        var update = { done: !this.state.done };
        this.setState(update);
        this.fb.update(update);
    },
    handleDelete: function(){
        this.fb.remove();
    }
});
