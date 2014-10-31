var React         = require('react')
  , Router        = require('react-router')
  , Routes        = Router.Routes
  , Route         = Router.Route
  , Redirect      = Router.Redirect
  , NotFoundRoute = Router.NotFoundRoute
  , App           = React.createFactory(require('../elements/App'))
  , Foo           = React.createFactory(require('../elements/Foo'))
  , Bar           = React.createFactory(require('../elements/Bar'))
  , Index         = React.createFactory(require('../elements/Index'));

module.exports = (
  <Routes>
    <Route name='app' handler={App}>
      <Route name="foo" handler={Foo} />
      <Route name="bar" path="/what/evz" handler={Bar} />
      <Route name="index" path="/" handler={Index} />
    </Route>
  </Routes>
);