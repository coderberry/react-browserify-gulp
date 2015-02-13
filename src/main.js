var React = require('react')
  , Router = require('react-router')
  , routes = require('./config/routes');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});