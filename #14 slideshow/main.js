let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(index)
{
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
    slideIndex = modify(slideIndex);
    
    setTimeout(showSlides, 2000);
}
function modify()
{
    if (slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    if (slideIndex < 1)
    {
        slideIndex = slides.length;
    }
    return slideIndex;
}
function plus(x)
{
    slideIndex += x;
    showSlides(modify(slideIndex));
}