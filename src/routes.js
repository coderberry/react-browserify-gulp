var Router = require('react-router')
  , Routes = Router.Routes
  , Route = Router.Route
  , Redirect = Router.Redirect
  , NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Routes>
    <Route name='app' handler={require('./App')}>
      <Route name='about' path='/' handler={require('./elements/About')} />
      <Route name='other' path='/other' handler={require('./elements/Other')} />
    </Route>
  </Routes>
)

React.render(routes, document.getElementById('app'));
