function initializeGallery() {
    console.log("Page loaded successfully. Initializing gallery...");
    addTabfocusAttributes();
}

function addTabfocusAttributes() {
    console.log("Adding tabindex attributes to images...");
    let images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Added tabindex to image " + (i + 1));
    }
}

function upDate(previewPic) {
    console.log("Event triggered: Mouseover/Focus");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Event triggered: Mouseleave/Blur");

    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over or focus on an image below to display here.";
}
