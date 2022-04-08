let index;
let imageLink;
const imagesArr = 'https://tltechsmart.github.io/notion-widgets/image_widget.json';
console.log("imagesArr:" , JSON.stringify(imagesArr);
async function linkImage() {
    index = Math.floor(Math.random()*imagesArr.length);
    imageLink = imagesArr[index].linkToImage;
    return document.getElementById('widget_image').src = imageLink;
}
