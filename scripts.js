let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Increment slideIndex and reset if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Call showSlides again after 1500 milliseconds (1.5 seconds)
    setTimeout(showSlides, 1500);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(); // Initial call to start the slideshow
});
