// Mobile Menu Toggle
function toggleMenu() {
    var navMobile = document.getElementById("nav-mobile");
    if (navMobile) {
        navMobile.classList.toggle("active");
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the buttons that opens the modal
var viewMoreBtns = document.querySelectorAll(".view-more-btn");
var watchBtns = document.querySelectorAll(".watch-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Ensure modal is hidden on page load
if (modal) {
    modal.style.display = "none";
}

// Function to open modal with image
function openImageModal(imageSrc) {
    var modalContentArea = document.getElementById("modal-content-area");
    modalContentArea.innerHTML = '<img src="' + imageSrc + '" style="max-width:100%; max-height:80vh;">';
    modal.style.display = "flex"; // Changed from "block" to "flex"
}

// Function to open modal with YouTube video
function openYoutubeModal(youtubeUrl) {
   var modalContentArea = document.getElementById("modal-content-area");
    modalContentArea.innerHTML = `
        <iframe src="${youtubeUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
    modal.style.display = "flex"; // Changed from "block" to "flex"
}

// Attach event listeners to "View More" buttons
viewMoreBtns.forEach(function(btn) {
    btn.onclick = function() {
        openImageModal(this.dataset.image);
    }
});

// Attach event listeners to "Watch button" buttons
watchBtns.forEach(function(btn) {
    btn.onclick = function() {
        openYoutubeModal(this.dataset.youtubeUrl);
    }
});

// When the user clicks on <span> (x), close the modal
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}