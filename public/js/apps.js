/*jslint browser: true*/
/*global $, jQuery, alert*/

// cache elements by storing it into a variable
// each query traverses the DOM tree, so chain your query or cache it
(function() {

  // on load, automatically make this request
  $.ajax({
    url : '/api/my_boards.json',
    method : 'GET',
    dataType : 'json',
    success : function(data) {

      display(data);

    },
    error : function(err) {
      console.log(err);
    }
  });

  function display(data) {
    var newTitle;
    var newUrl;

    // gets the element and throws it into a li
    var newTitleElement;
    var newUrlElement;

    var article = data.data.children;

    for (var i = 0; i < article.length; i++) {
      newTitle = article[i].data.title;
      newUrl = article[i].data.url;

      newTitleElement = $('<h2>', {
        text : newTitle,
        style : {
          'background-color' : 'red'
        },
        id : 'article_' + i
      });

      newUrlElement = $('<a>', {
        text : newUrl
      });

      $('#post_' + i).append(newTitleElement).append(newUrlElement);
    }
  }

})();