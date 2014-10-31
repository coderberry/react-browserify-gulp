var React         = require('react')
  , Router        = require('react-router')
  , Routes        = Router.Routes
  , Route         = Router.Route
  , Redirect      = Router.Redirect
  , NotFoundRoute = Router.NotFoundRoute
  , App           = require('../elements/App')
  , Foo           = require('../elements/Foo')
  , Bar           = require('../elements/Bar')
  , Index         = require('../elements/Index');

module.exports = (
  <Routes>
    <Route name='app' handler={App}>
      <Route name="foo" handler={Foo} />
      <Route name="bar" path="/what/evz" handler={Bar} />
      <Route name="index" path="/" handler={Index} />
    </Route>
  </Routes>
);