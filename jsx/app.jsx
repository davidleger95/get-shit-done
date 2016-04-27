
var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var TodoList = require('./todo-list');

var rootURL = "https://shining-heat-6642.firebaseio.com/";

//var Routes = require('./routes');
//var Api = require('./utils/api');

var App = React.createClass({
    mixins: [ ReactFire ],
    getInitialState: function(){
        return {
            items: {},
            loaded: false
        }
    },
    componentWillMount: function(){
        var fb = new Firebase(rootURL + 'items/');
        this.bindAsObject(fb, 'items');
        fb.on('value', this.handleDataLoaded);
    },
    render: function(){
        console.log("Hello");
        console.log(this.state);
        return <div className="container">
            <Header data={this.props.data.nav} />
            <TodoList itemsWrite={this.firebaseRefs.items}
                      itemsRead={this.state.items} />
        </div>
    },
    handleDataLoaded: function(){
        this.setState({ loaded: true });
    }
});

var options = {
    data: {
        nav: [
            {
                title: "Family Shit",
                count: 2
            },
            {
                title: "Work Shit",
                count: 2
            },
            {
                title: "Personal Shit",
                count: 5
            },
            {
                title: "Vacation Shit",
                count: 3
            }
        ]
    }
}


var element = React.createElement(App, options);



React.render(element, document.querySelector('#app'));
