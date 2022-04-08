async function linkImage() {
    let response = await fetch("image-widget-quotes.json");
    let parsed = await response.json();
    let index = Math.floor(Math.random()*parsed.length);
    let imageSource = parsed[index].linkToImage;
    document.getElementById('widget_image').src = imageSource;
}
