var React = require('react');

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
                <img onClick={this.handleClick}
                     className="icon icon-check"
                     src={ "../img/check-" + (this.state.done ? "color":"grey") + ".svg"} />
            </div>
            {this.state.text}
            <span type="date"
                   className="due">
                   {this.state.date}</span>
        </li>
    },
    handleClick: function(){
        var update = { done: !this.state.done };
        this.setState(update);
        this.fb.update(update);
    }
});
