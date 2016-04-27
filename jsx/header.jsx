var React = require('react');
var NavItem = require('./nav-item');
var Button = require('./button');
module.exports = React.createClass({
    render: function(){
        var list = this.props.data.map(function(items){
            return <NavItem {...items}/>
        });
        return <header>
            <div className="thumbnail">
                <img src="http://fillmurray.com/80/80" alt="Image"/>
            </div>
            <nav>
                <NavItem/>
                
            </nav>
            <Button title="" icon="img/plus.svg"/>
        </header>
    }
});
