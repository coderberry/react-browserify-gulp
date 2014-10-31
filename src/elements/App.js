var React = require('react')
  , Link  = require('react-router').Link;

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>App</h1>
        <ul>
          <li><Link to="index">Home</Link></li>
          <li><Link to="foo">Foo</Link></li>
          <li><Link to="bar">Bar</Link></li>
        </ul>
        {this.props.activeRouteHandler()}
      </div>
    )
  }
});

module.exports = App;