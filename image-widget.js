let index;
const imagesArr = require('image-widget.json');
async function linkImage() {
    index = Math.floor(Math.random()*imagesArr.length);
    return document.getElementById('widget_image').src = imagesArr[index].linkToImage;
}
