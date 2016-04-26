var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            text: ''
        }
    },
    render: function(){
        return <div className="input-group">
            <input type="text"
                   value={this.state.text}
                   onChange={this.handleInputChange}
                   onKeyPress={this.handleSubmit}
                   placeholder={this.props.placeholder}/>
        </div>
    },
    handleSubmit: function(e){

    },
    handleInputChange: function(e){
        this.setState({text: e.target.value});
    }
});
