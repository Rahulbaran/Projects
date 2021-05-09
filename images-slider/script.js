// selecting all images as an array
let allImages = ["Images/Home Background.jpg",
                "Images/First-Section-inner.jpg",
                "Images/pakata-goh-RDolnHtjVCY-unsplash.jpg",
                "Images/3840x2160-2624410-shraddha-kapoor-4k-wallpaper-pc-background.jpg",
                "Images/3840x2160-2620098-shraddha-kapoor-4k-desktop-background-wallpaper.jpg",
                "Images/ben-kolde-bs2Ba7t69mM-unsplash.jpg",
                "Images/medium-article-img.jpg"];

//Selecting previous and next button
let previousBtn,nextBtn;
previousBtn = document.getElementById('previous');
nextBtn = document.getElementById('next');       

//selecting image 
let image = document.getElementById('slider-image');

//defining and initializing a variable with initial value 0
let initialLoadImage = 0;

//initial image after window loading event
window.addEventListener('DOMContentLoaded',() => {
    image.src = allImages[initialLoadImage];
});

//=====================clicking Events=====================

//on clicking next button
nextBtn.addEventListener('click', () => {
     initialLoadImage++;
     //checking if loaded image is last image
     if(initialLoadImage > allImages.length - 1)  initialLoadImage = 0;
    imageLoader(initialLoadImage);
    }
);
//on clicking previous button
previousBtn.addEventListener('click', () => {
    initialLoadImage--;
    //checking if loaded image is last image
    if(initialLoadImage < 0 )  initialLoadImage = (allImages.length - 1);
   imageLoader(initialLoadImage);
   }
);


//================ keyboard left and right events================
window.addEventListener('keydown',(e) => {
    if(e.keyCode === 39) {
        initialLoadImage++;
        if(initialLoadImage > allImages.length - 1) initialLoadImage = 0;
    };
    imageLoader(initialLoadImage);
});

window.addEventListener('keydown',(e) => {
    if(e.keyCode === 37) {
        initialLoadImage--;
        if(initialLoadImage < 0) initialLoadImage = allImages.length - 1;
    };
    imageLoader(initialLoadImage);
});



//image loading function
function imageLoader(index) {
    image.src = allImages[index];
}



