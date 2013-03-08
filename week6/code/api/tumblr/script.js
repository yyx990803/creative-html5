function buildURL (blogname, apiKey) {
    return 'http://api.tumblr.com/v2/blog/'
        + blogname
        + '.tumblr.com/posts?api_key='
        + apiKey
        + '&callback=?'
}

var key = 'fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4'

var url = buildURL('bacac603', key)

$.getJSON(url, function (data) {

    console.log(data)

    var blog = data.response.blog,
        posts = data.response.posts

    createHeader(blog)
    createPosts(posts)

})

function createHeader (blog) {
    var title = $('<h1>' + blog.title + '</h1>')
    title.appendTo('body')
}

function createPosts (posts) {
    posts.forEach(function (post) {

        var postElement = $('<div class="post"></div>')

        if (post.type === 'photo') {
            var imgURL = post.photos[0].original_size.url
            var img = new Image()
            img.src = imgURL
            img.onload = function () {
                postElement.append(img)
            }
        }

        postElement.appendTo('body')

    })
}

// let's build a page!