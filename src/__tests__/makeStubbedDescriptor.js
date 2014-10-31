var React = require('react')
  , _ = require('lodash');

module.exports = function(element, props, contextStubs) {
  var TestWrapper = React.createClass({
    childContextTypes: {
      currentPath: React.PropTypes.string,
      makePath: React.PropTypes.func.isRequired,
      makeHref: React.PropTypes.func.isRequired,
      transitionTo: React.PropTypes.func.isRequired,
      replaceWith: React.PropTypes.func.isRequired,
      goBack: React.PropTypes.func.isRequired,
      isActive: React.PropTypes.func.isRequired,
      activeRoutes: React.PropTypes.array.isRequired,
      activeParams: React.PropTypes.object.isRequired,
      activeQuery: React.PropTypes.object.isRequired,
      location: React.PropTypes.object,
      routes: React.PropTypes.array.isRequired,
      namedRoutes: React.PropTypes.object.isRequired,
      scrollBehavior: React.PropTypes.object
    },

    getChildContext: function() {
      return _.extend({
        currentPath: '__STUB__',
        makePath: function() {},
        makeHref: function() { return '__STUB__'; },
        transitionTo: function() {},
        replaceWith: function() {},
        goBack: function() {},
        isActive: function() {},
        activeRoutes: [],
        activeParams: {},
        activeQuery: {},
        location: {},
        routes: [],
        namedRoutes: {},
        scrollBehavior: {}
      }, contextStubs);
    },

    render: function() {
      props.activeRouteHandler = function() {};
      return element(props);
    }
  });

  return React.createElement(TestWrapper, {});
};

