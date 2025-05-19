// getElementsByClassName
// Returns the Elements as an HTML Collection or empty collection (if not found)

document.getElementsByClassName("oldImg");
document.getElementsByClassName("oldImg")[0];
document.getElementsByClassName("oldImg")[1];

let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
    console.dir(smallImages[i]);
    console.dir(smallImages[i].src);
}

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed.`);
}

