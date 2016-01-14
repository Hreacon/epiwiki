
function makeNameALink(name) {
  var link = name.toLowerCase();
  link = link.replace(/ /g, '-');
  return link;
}
$(document).ready(function() {
  $('.code').each(function(index, obj) {
    $(this).text($(this).html());
  });
  var terms = [
    ['Markdown', 'A software tool that converts the plain text formatting to HTML'],
    ['HTML Display Types', 'CSS Property Display'],
    ['CSS', 'Cascading Style Sheets, how to style your web page!'],
    ['Arrays', 'A great way of storing local information!'],
    ['Attributes', 'Attributes provide additional information about HTML elements.'],
    ['Floats', 'A CSS property'],
    ['Box Model', 'A box that wraps around HTML element.'],
    ['Grid System', 'a system that is structured to allow for content to be stacked both vertically and horizontally.'],
    ['Responsive Design','Used to create synergy between various sized viewing screens.'],
    ['JavaScript Arithmetic', 'maths in practice'],
    ['JavaScript Functions', 'A fancy word for "Run this block of code"'],
    ['JavaScript Variables', 'A place to store information'],
    ['JavaScript Strings', 'An array disguised as a line of text'],
    ['JavaScript Methods', 'A function, but in an object'],
    ['jQuery', 'A powerful library used to easily select and manipulate the DOM'],
    ['DOM Manipulation', 'Manipulate the web page with JavaScript'],
    ['Forms', 'Collect input from the user'],
    ['Branching', 'This is a functionality that allows specific content to be displayed when a user selects certain criteria'],
    ['Looping', 'Executing code more than once'],
    ['Bootstrap', 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.'],
    ['Divs and Spans', 'Elements used to demarkate and delineate']
  ];
  terms.sort();

  var href = window.location.href;
  var page = href.substr(href.lastIndexOf('/') +1);
  page = page.substr(0, page.indexOf('.'));
  var currentPageIndex = 0;

  for(var index=0;index<terms.length;index+=1) {
    if(makeNameALink(terms[index][0]) === page)
      currentPageIndex = index;
  }

  var homeLink = '../index';
  var nextLink;
  var prevLink;

  if( page === 'index') {
    terms.forEach(function(term) {
      $(".terms").append('<a class="term" href="html/' + makeNameALink(term[0]) + '.html"><div ><p>' + term[0] +  '</p></div></a>');
    });
    homeLink = 'index';
  } else if (page === "branching") {
    $('.branchButton').click(function() {
      $('.branch1').toggle();
      $('.branch2').toggle();
    });
  }

  if($(".title").text().length < 2) {
    $(".title").text(terms[currentPageIndex][0]);
  }

  var header = '<header class="page-header"><ol class="nav nav-pills pull-right"><li><a class="btn" href="' + homeLink + '.html"><span class="glyphicon glyphicon-home"></span></a></li><li><a class="btn" href="' + prevLink + '.html"><span class="glyphicon glyphicon-arrow-left"></span></a></li><li><a class="btn" href="' + nextLink + '.html"><span class="glyphicon glyphicon-arrow-right" ></span></a></li></ol><h3 class="name">Epiwiki</h3></header>';
  $('.container').prepend(header);

  $('form').submit(function(event){event.preventDefault();});

});
