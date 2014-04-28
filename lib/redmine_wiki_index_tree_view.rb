
module Redmine
  module Plugins
    class RedmineWikiIndexTreeViewListener < Redmine::Hook::ViewListener
      def view_layouts_base_html_head(context)
        return unless context[:controller]
        params = context[:controller].params
        return unless (params[:controller] == 'wiki' && params[:action] == 'index')

        tags = [stylesheet_link_tag('jquery.treeview.css',   :plugin => 'redmine_wiki_index_tree_view')]
        tags << javascript_include_tag('jquery.treeview.js', :plugin => 'redmine_wiki_index_tree_view')
        tags << javascript_include_tag('redmine_wiki_index_tree_view.js', :plugin => 'redmine_wiki_index_tree_view')
        tags.join("\n")
      end
    end
  end
end
