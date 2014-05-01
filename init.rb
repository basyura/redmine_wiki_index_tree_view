require File.dirname(__FILE__) + '/lib/redmine_wiki_index_tree_view'


Redmine::Plugin.register :redmine_wiki_index_tree_view do
  name 'Redmine Wiki Index Tree View plugin'
  author 'basyura'
  description 'This is a plugin for Redmine'
  version '0.0.1'
  url 'https://github.com/basyura/redmine_wiki_index_tree_view'
  author_url 'http://basyura.org/'

  settings :default => {
    'default_open_hierarchy' => 2,
  }, :partial => 'settings/settings'

end
