var React = require('react')
  , makeStubbedDescriptor = require('../../__tests__/makeStubbedDescriptor')
  , App = require('../App');

describe('app', function() {
  it('renders links', function(done) {
    var app = React.render(makeStubbedDescriptor(App, {}), document.createElement('div'));
    assert(app.getDOMNode().querySelectorAll('a').length === 3, 'There are three links');
    done();
  });
});

