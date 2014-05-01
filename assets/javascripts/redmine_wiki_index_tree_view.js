
$(document).ready(function(){
  
  function root() {
    return $(".pages-hierarchy:first");
  }

  // changed to treeview
	root().treeview({
		collapsed: true,
	});
  // expand first node
  $(".hitarea:first").click();
  // open second hierarchy
  if (get_redmine_wiki_index_tree_view_default_open_hierarchy() == 2) {
    $('.treeview:first').find('ul:first').children('li').find('.hitarea:first').click();
  }
  // add keyword textbox
  var keyword = $('<input type="text">');
  $('h2').after(keyword);
  // expand tree
  keyword.focus(function() {
    root().find(".expandable-hitarea").each(function() { $(this).click(); });
  });
  // filter by keyword
  keyword.keyup(function() {
    var text = keyword.val();
    if (text == '') {
      root().find("li").each(function() { $(this).css('display', ''); });
      return;
    }
    // filter regexp
    var regex = new RegExp(text, 'i');
    // filter
    root().find("a").each(function() {
        var title = $(this).text();
        if (title.match(regex)) {
          var parent = $(this).parent('li')
          while (parent.size() != 0) {
            parent.css('display', '');
            parent = parent.parent().parent('li');
          }
        }
        else {
          $(this).parent('li').css('display', 'none');
        }
    });
  });
});
