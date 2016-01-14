
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
    ['Grid System', ''],
    ['Responsive Design',''],
    ['JavaScript Arithmatic', ''],
    ['JavaScript Functions', ''],
    ['JavaScript Variables', ''],
    ['JavaScript Strings', ''],
    ['JavaScript Methods', ''],
    ['jQuery', 'A powerful library used to easily select and manipulate the DOM'],
    ['DOM Manipulation', 'Manipulate the web page with JavaScript'],
    ['Forms', 'Collect input from the user'],
    ['Branching', ''],
    ['Looping', ''],
    ['Bootstrap', ''],
    ['Divs and Spans', '']
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
});
