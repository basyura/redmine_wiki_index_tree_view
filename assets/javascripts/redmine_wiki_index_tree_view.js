
$(document).ready(function(){
  
  function root() {
    return $(".pages-hierarchy:first");
  }
  function to_treeview(div) {
    var param = {};
    if (div >= 0) {
      param.collapsed = true;
    }
    // changed to treeview
    root().treeview(param);
    // expand first node
    if (div >= 1) {
      $(".hitarea:first").click();
    }
    if (div == 2) {
      $('.treeview:first').find('ul:first').children('li').find('.hitarea:first').click();
    }
  }
  // to treeview and open hierarchy
  to_treeview(get_redmine_wiki_index_tree_view_default_open_hierarchy());
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
