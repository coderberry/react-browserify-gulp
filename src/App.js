var React = require('react')
  , Link  = require('react-router').Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>React QuickStart</h1>
        <Link to='about'>About</Link>
        <Link to='other'>Other</Link>
        <this.props.activeRouteHandler />
      </div>
    )
  }
});

module.exports = App;