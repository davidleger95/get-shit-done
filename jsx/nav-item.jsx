var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <li className="nav-item">Get Shit Done (v0.2)</li> //<li className="nav-item {this.props.css}">{this.props.title} (<span>{this.props.count}</span>)</li>
    }
});
