
// Welcome message in browser console

console.log("Welcome to RRCE IEEE Website!");

// Smooth navigation

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function() {

        console.log(
            "Navigating to " + this.textContent
        );

    });

});

