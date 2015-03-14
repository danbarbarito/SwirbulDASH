/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  // "keypress .book-search": function (event) {
  //   Meteor.call("parseQuery", $('.input').val(), function(error, result) {
  //
  //   });
  // },
  'click .result': function (event) {
    Meteor.call("parseBook", this.url, function(error, result) {
       var callback = result.match(/[A-Z]+([0-9{3}])/)
      $('.info').html('<h1>Location of ' + this.title + '</h1><h3>' + result + "</h3>");
    });
  },
  'keypress .book-search': function (event) {
    //Remove books
    Meteor.call('removeAllBooks');
    Meteor.call("parseQuery", $('.input').val(), function(error, result) {

    });
  }

});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  books: function(){
    return Books.find({},{sort: {createdAt: -1}});
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
