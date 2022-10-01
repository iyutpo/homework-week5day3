function addCampImages() {
    var filenames = [];
    var openList = "<li class='partner'>";
    var closeList = "</li>";
    var image;
    var images = ['partner-bustour', 'partner-cabinrental', 'partner-campingadv',
            'partner-collegetours', 'partner-rentalbike', 'partner-tourgroup'];
    var imageList = [];
    for (var i = 0; i < images.length; i++) {
        filenames.push("<img src='./images/partners/" + images[i] + ".png'>");
        image = openList + filenames[i] + closeList;
        imageList.push(image);
    }
    console.log(imageList);
    document.getElementById('partners').innerHTML = imageList.join(' ');
}
addCampImages();