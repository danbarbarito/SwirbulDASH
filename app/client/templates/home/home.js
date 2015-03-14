/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  "keypress .book-search": function (event) {

  },
  'click .result': function (event) {
    $('.info').html('<h1>Location of ' + this.title + '</h1><h3>' + this._id + "</h3>");
  },
  'click .button': function (event) {
    Meteor.call("parseQuery", $('.input').val(), function(error, result) {

    });
  }

});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  books: function(){
    return Books.find({});
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
