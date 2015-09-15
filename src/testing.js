var defaults = function(obj) {
  _.each(arguments, function(argObject) {
    _.each(argObject, function(value, key) {
      if (obj[key] === undefined) {
        obj[key] = value;
      }
    });
  });
  return obj;
}



// var to = {};
// var from = {};
// var defaulted = _.defaults(to, from);
// expect(defaulted).to.equal(to);

// var to = {};
// var from = { a: 1 };
// var defaulted = _.defaults(to, from);
// expect(defaulted.a).to.equal(1);

// var to = { a: 10 };
// var from = { a: 1 };
// var defaulted = _.defaults(to, from);
// expect(defaulted.a).to.equal(10);

// var to = {a: '', b: NaN };
// var from = { a: 1, b: 2 };
// var defaulted = _.defaults(to, from);
// expect(defaulted.a).to.equal('');
// expect(isNaN(defaulted.b)).to.be.true;

// var to = {};
// var from = { a: 1 };
// var alsoFrom = { a: 2 };
// var defaulted = _.defaults(to, from, alsoFrom);
// expect(defaulted.a).to.equal(1);
