let index;
let imageLink;
const imagesArr = require('image-widget.json');
console.log("imagesArr:" , JSON.stringify(imagesArr);
async function linkImage() {
    index = Math.floor(Math.random()*imagesArr.length);
    imageLink = imagesArr[index].linkToImage;
    return document.getElementById('widget_image').src = imageLink;
}
