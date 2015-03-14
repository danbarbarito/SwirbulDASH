/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  "submit .book-search": function (event) {
    // This function is called when a book is searched for

    var text = event.target.text.value;

    Books.insert({
      title: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  },
  'click #test': function(event){
    
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
