<script>
    let index;
    const imagesArr = [
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/1.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/2.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/3.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/4.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/5.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/6.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/7.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/8.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/9.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/10.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/11.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/12.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/13.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/14.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/15.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/16.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/17.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/18.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/19.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/20.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/21.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/22.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/23.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/24.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/25.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/26.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/27.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/28.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/29.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/30.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/31.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/32.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/33.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/34.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/35.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/36.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/37.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/38.png",
        "https://www.tltechsmart.com/wp-content/uploads/2022/04/39.png"        
    ];
    async function linkImage() {
        index = Math.floor(Math.random()*imagesArr.length);
        document.getElementById('widget_image').src = imagesArr[index];
    }
</script>
