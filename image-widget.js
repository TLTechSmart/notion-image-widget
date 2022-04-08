let index;
let imageLink;
import * as data from 'image_widget.json';
const { linkToImage } = data;
console.log(linkToImage);
// const imagesArr = 'https://tltechsmart.github.io/notion-widgets/image_widget.json';
// console.log("imagesArr:" , JSON.stringify(imagesArr));
async function linkImage() {
    index = Math.floor(Math.random()*data.length);
    imageLink = data[index].linkToImage;
    return document.getElementById('widget_image').src = imageLink;
}
