function goToProducts() {
    window.location.href = "products.html";
}

function goToDetails() {
    window.location.href = "details.html";
}

document.querySelectorAll(".search-bar").forEach(input => {
    input.addEventListener("keyup", function () {
        console.log("Searching:", input.value);
    });
});