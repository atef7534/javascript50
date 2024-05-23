let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideIndex = 1;
let myTimeOut;

showSlides(slideIndex);

function showSlides()
{
    if (slideIndex < 1)
        slideIndex = slides.length;
    if (slideIndex > slides.length)
        slideIndex = 1;
    let i;
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    slideIndex++;
    
    myTimeOut = setTimeout(showSlides, 2000);
}
function plus(x)
{
    slideIndex += x;
    if (slideIndex < 1)
        slideIndex = slides.length;
    if (slideIndex > slideIndex)
        slideIndex = 1;
    clearTimeout(myTimeOut)
    showSlides();
}