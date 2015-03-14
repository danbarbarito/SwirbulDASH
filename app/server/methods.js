/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
var cheerio =  Meteor.npmRequire('cheerio');
var request = Meteor.npmRequire('request');
var parsedResults = [];
var titles = [];
var urls = [];

Meteor.methods({
    parseQuery: function (term) {
      request('http://alicat.adelphi.edu/search/?searchtype=X&SORT=D&searcharg=' + encodeURIComponent(term) + '&searchscope=1', function (error, response, html) {
        if (!error && response.statusCode == 200) {
          var $ = cheerio.load(html);
          $('h2.briefcitTitle').each(function(i, element){
            // Parse the link title
            var title = $(this).text();
            //console.log(title);
            //console.log(a);
            // Parse the href attribute from the "a" element
            // var url = $(this).attr('href');
            // Our parsed meta data object
            // var metadata = {
            //   title: title,
            //   url: url,
            // };
            // Push meta-data into parsedResults array
            //parsedResults.push(metadata);
            titles.push(title);
          });
          $('h2.briefcitTitle>a').each(function(i, element){
            var url = $(this).attr('href');
            urls.push(url);
          });


        };})
        // Insert results
        for (index = 0; index < titles.length; ++index){
          Books.insert({title: titles[index], url: urls[index], createdAt: new Date()});
        }
        return titles;}});
