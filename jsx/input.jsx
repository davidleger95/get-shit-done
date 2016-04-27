var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            text: '',
            date: 'today'
        }
    },
    render: function(){
        return <div className="input-group">
            <input type="text"
                   value={this.state.text}
                   onChange={this.handleInputChange}
                   onKeyUp={this.handleSubmit}
                   placeholder={this.props.placeholder}/>
        </div>
    },
    handleSubmit: function(e){
        if(e.keyCode == 13){    // On Enter key
            this.props.items.push({
                text: this.state.text,
                date: this.state.date,
                done: false
            });
            this.setState({
                text: '',
                date: new Date()
            });
        }

    },
    handleInputChange: function(e){
        this.setState({text: e.target.value});
    }
});
