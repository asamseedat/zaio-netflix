const form = document.querySelector("form");

function redirectToNetflixWebsite(event) {
    event.preventDefault(); 
    // console.log("Form submitted");
    window.location.replace("https://www.netflix.com/");
}

form.addEventListener("submit", redirectToNetflixWebsite);