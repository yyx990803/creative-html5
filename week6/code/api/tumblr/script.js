function buildURL (blogname, apiKey) {
    return 'http://api.tumblr.com/v2/blog/'
        + blogname
        + '.tumblr.com/posts?api_key='
        + apiKey
        + '&callback=?'
}

var key = 'fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4'

var url = buildURL('bacac603', key)

$(function () {
    $.getJSON(url, function (data) {

        // inspect this in console to see what data we got
        console.log(data)

        createHeader(data.response.blog)
        createPosts(data.response.posts)

    })
})

function createHeader (blog) {
    var title = $('<h1>' + blog.title + '</h1>')
    title.appendTo('body')
}

function createPosts (posts) {
    
    posts.forEach(function (post) {

        var postElement = $('<div class="post"></div>')
        postElement.addClass(post.type)

        // you will need to check for different types of posts
        // and treat them differently
        // because they will have different properties
        if (post.type === 'photo') {

            var imgURL = post.photos[0].original_size.url
            var img = new Image()
            img.src = imgURL
            img.onload = function () {
                postElement.append(img)
            }

        } else if (post.type === 'text') {

            postElement.append('<h2>' + post.title + '</h2><p>' + post.slug + '</p>')

        } else if (post.type === 'quote') {

            postElement.append('<h3>"' + post.text + '"</h3>')

        }

        postElement.appendTo('body')

    })
}

// let's build a page!