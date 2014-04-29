
$(document).ready(function(){
  // changed to treeview
	$(".pages-hierarchy:first").treeview({
		collapsed: true,
	});
  // expand first node
  $(".hitarea:first").click();
  // open second hierarchy
  $('.treeview:first').find('ul:first').children('li').find('.hitarea:first').click();
  // add keyword textbox
  var filter_keyword = $('<input type="text" value="" id="filter_keyword">');
  $('h2').after(filter_keyword);

  // expand tree
  $('#filter_keyword').focus(function() {
    $('.pages-hierarchy:first').find(".expandable-hitarea").each(function() {
        $(this).click();
    });
  });
  // filter by keyword
  $('#filter_keyword').keyup(function() {
    var text = filter_keyword.val();
    if (text == '') {
      $('.pages-hierarchy:first').find("li").each(function() { $(this).css('display', ''); });
      return;
    }
    // filter regexp
    var regex = new RegExp(text, 'i');

    $('.pages-hierarchy:first').find("a").each(function() {
        var title = $(this).text();
        if (title.match(regex)) {
          var pare = $(this).parent('li')
          while (pare.size() != 0) {
            pare.css('display', '');
            pare = pare.parent().parent('li');
          }
        }
        else {
          $(this).parent('li').css('display', 'none');
        }
    });
  });
});
