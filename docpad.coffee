fs = require "fs-extra"
replace = require "replace"

bootstrapVersion = "3.3.2"

bootstrapUrl = (resource) ->
  "//maxcdn.bootstrapcdn.com/bootstrap/#{bootstrapVersion}/#{resource}"

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

  events:
    docpadReady: ->
      fs.ensureDirSync "src/files/styles"
      fs.copySync "bower_components/bootstrap.min/index.css", "src/files/styles/bootstrap.min.css"
      replace {
        regex: /\.{2}\/fonts\//g
        replacement: bootstrapUrl "fonts/"
        paths: [ "src/files/styles/bootstrap.min.css" ]
        silent: true
      }

  plugins:
    ghpages:
      deployBranch: 'gh-pages'
      deployRemote: 'origin'

  templateData:
    getBootstrapUrl: bootstrapUrl

    getTitle: ->
      if @document.title then "#{@site.title} | #{@document.title}" else @site.title

    site:
      author: "John Batte"
      description: "It's the gist you want AND the gist you need"
      ghSource:
        url: "http://github.com/jbatte47/code-splat"
        ribbon: "https://camo.githubusercontent.com/c6286ade715e9bea433b4705870de482a654f78a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f77686974655f6666666666662e706e67"
        ribbonData: "https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png"
      project:
        board: "https://trello.com/b/WgxVSk6o"
      title: "code-splat"
      url: "http://johnbatte.me/code-splat"
}
