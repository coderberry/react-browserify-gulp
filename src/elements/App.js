var React        = require('react')
  , Router       = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Link         = Router.Link;

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
        <RouteHandler/>
      </div>
    )
  }
});

module.exports = App;