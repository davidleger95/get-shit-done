var React = require('react');
module.exports = React.createClass({

    render: function(){
        return <div className="check">
            <img className="icon icon-check"
                 checked={this.props.done}
                 onClick={this.handleClick}
                 src={ "../img/check-" + (this.props.done ? "color":"grey") + ".svg"} />
        </div>
    },
    handleClick: function(){
        //alert("clicked!");
        //this.setState({done: !this.state.done});
    }
});
