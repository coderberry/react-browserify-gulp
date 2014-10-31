exports.present = function(next, env) {
  var name = env.args[0];
  var constructorName = name.charAt(0).toUpperCase() + name.slice(1);
  next({
    name: constructorName
  });
};

exports.templates = [
  'src/elements/element.js.hbs',
  'src/elements/__tests__/element.test.js.hbs',
  'src/styles/elements/element.less.hbs'
];