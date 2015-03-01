port = ->
  process.env.PORT || 9778

module.exports = {
  collections: 
    pages: ->
      @getCollection("html").findAllLive({show:true}).on "add", (model) ->
        model.setMetaDefaults({layout:"default"})

  environments:
    development:
      templateData:
        site:
          url: "http://localhost:#{port()}".replace(/([\s]+)|(\/$)/, "")

  plugins:
    ghpages:
      deployBranch: 'gh-pages'
      deployRemote: 'origin'

  templateData:
    getTitle: ->
      if @document.title then "#{@site.title} | #{@document.title}" else @site.title
      
    site:
      author: "John Batte"
      description: "It's the gist you want AND the gist you need"
      title: "code-splat"
      url: "http://johnbatte.me/code-splat"
}
