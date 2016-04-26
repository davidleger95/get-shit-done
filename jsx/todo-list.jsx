var React = require('react');
var Input = require('./input');
module.exports = React.createClass({
    render: function(){
        return <div className="list-wrapper">
            <Input placeholder="What shit needs to get done?" />
            <ul className="list">
                <li className="list-item active">
                    <span className="check"></span>
                    Daily Design #3: Simple Todo List
                    <span className="due">In 2 days</span>
                </li>
                <li className="list-item active">
                    <span className="check"></span>
                    Reply to emails... get inbox to zero!!
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    Another Todo
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    One More
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    Another Todo
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    One More
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    Another Todo
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    One More
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    Another Todo
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    One More
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    Another Todo
                    <span className="due">Today</span>
                </li>
                <li className="list-item complete">
                    <span className="check"></span>
                    One More
                    <span className="due">Today</span>
                </li>
            </ul>
        </div>
    }
});
