var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <button className=""><img className="icon icon-plus" src={this.props.icon} />{this.props.title}</button>
    }
});
