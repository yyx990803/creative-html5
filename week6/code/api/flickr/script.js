var flickrApiKey = '8bee05151906fe0ceda566182a16f1e4',
    searchURL = 'http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key='+flickrApiKey+'&per_page=30&format=json&nojsoncallback=1'

$(function () {
    $.getJSON(searchURL, function (response) {
        console.log(response)
        if (response.stat === 'ok') {
            response.photos.photo.forEach(buildPhoto)
        }
    })
})

function buildPhoto (p) {
    var img = new Image()
    var url = buildPhotoURL(p, 'z')
    console.log(url)
    img.src = url
    img.onload = function () {
        $('body').append(img)
    }
}

function buildPhotoURL(p, size) {
    //$size: s = square, z = medium, b = large
    size = size || 's';
    return "http://farm" + p.farm + ".static.flickr.com/" + p.server + "/" + p.id + "_" + p.secret + "_" + size + ".jpg";
}