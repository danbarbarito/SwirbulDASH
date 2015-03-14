Meteor.startup(function () {
  return Meteor.methods({

      removeAllBooks: function() {

        return Books.remove({});

      }
});
});
