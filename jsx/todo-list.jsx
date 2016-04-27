var React = require('react');
var Input = require('./input');
var ListItem = require('./list-item');
module.exports = React.createClass({

    render: function(){

        return <div className="list-wrapper">
            <Input placeholder="What shit needs to get done?" items={this.props.itemsWrite} />
            <ul className="list">
                {this.todo().active}
                {this.todo().done}
                {this.todo().empty}
            </ul>
        </div>
    },
    todo: function(){
        //console.log("render");
        if(!this.props.itemsRead){  // empty list.
            return { empty: <p className="empty-list">No shit to do.</p> }
        }else{
            var active = [], done = [];

            for (var key in this.props.itemsRead){
                var item = this.props.itemsRead[key];
                item.key = key;
                if(this.props.itemsRead[key].done){
                    done.push(<ListItem item = {item} key = {key}></ListItem>);
                }else{
                    active.push(<ListItem item = {item} key = {key}></ListItem>);
                }
            }
            // flip ordering
            active = active.reverse();
            done = done.reverse();

            return {active: active, done: done};
        }
    }
});
