async function linkImage() {
    let response = await fetch("image-widget-quotes.json");
    let parsed = await response.json();
    let index = Math.floor(Math.random()*parsed.length);
    let imageSource = parsed[index].linkToImage;
    let imageAlt = `Quote by ${parsed[index].source}. ${parsed[index].quote}`;
    let imageTitle = `Quote by ${parsed[index].source}`;
    document.getElementById('widget_image').src = imageSource;
    document.getElementById('widget_image').alt = imageAlt;
    document.getElementById('widget_image').title = imageAlt;
}
