var React  = require('react')
  , RR     = require('react-router')
  , Routes = RR.Routes
  , Route  = RR.Route;

var routes = (
  <Routes>
    <Route name='app' handler={require('./App')}>
      <Route name='about' path='/' handler={require('./elements/About')} />
      <Route name='other' path='/other' handler={require('./elements/Other')} />
    </Route>
  </Routes>
)

React.render(routes, document.getElementById('app'));
