var React         = require('react')
  , Router        = require('react-router')
  , Route         = Router.Route
  , DefaultRoute  = Router.DefaultRoute
  , App           = require('../elements/App')
  , Foo           = require('../elements/Foo')
  , Bar           = require('../elements/Bar')
  , Index         = require('../elements/Index');

module.exports = (
  <Route name='app' handler={App}>
    <DefaultRoute handler={Index} />
    <Route name="foo" path="/foo" handler={Foo} />
    <Route name="bar" path="/what/evz" handler={Bar} />
    <Route name="index" path="/" handler={Index} />
  </Route>
);