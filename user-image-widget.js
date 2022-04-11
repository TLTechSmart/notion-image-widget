async function linkImage() {
    let response = await fetch("user-image-widget-list.json");
    let parsed = await response.json();
    let index = Math.floor(Math.random()*parsed.length);
    let imageSource = parsed[index].linkToImage;
    let imageAlt = `Quote by ${parsed[index].source}. ${parsed[index].quote}`;
    let imageTitle = `Quote by ${parsed[index].source}`;
    document.getElementById('widget_image').src = imageSource;
    document.getElementById('widget_image').alt = imageAlt;
    document.getElementById('widget_image').title = imageTitle;
}

async function addImage(imageName, imageLink) {
    
    // let response = await fetch("user-image-widget-list.json", { method: "POST", body: blob });
    // console.log(response);
    // let parsed = await response.json();
    // console.log(parsed);
    // let imageSource = parsed[index].linkToImage;
    // let imageAlt = `Quote by ${parsed[index].source}. ${parsed[index].quote}`;
    // let imageTitle = `Quote by ${parsed[index].source}`;
    // document.getElementById('widget_image').src = imageSource;
    // document.getElementById('widget_image').alt = imageAlt;
    let blob = {'title': imageName, 'linkToImage': imageLink};
    console.log(blob);
    // parsed.push(blob);
    // console.log(parsed);
    // response = JSON.stringify(parsed);
    document.getElementById('imageName').value = "";
    document.getElementById('imageLink').value = "";
    // console.log(imageName);
    // console.log(imageLink);
    // let data = new FormData();
    // data.append("upfile", new Blob([blob], {type: "text/plain"}));
    // fetch("user-image-widget-list.json", { method: "POST", body: data });
    let response = await fetch("user-image-widget-list.json", { method: "POST", body: blob });
}