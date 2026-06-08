document.addEventListener("DOMContentLoaded", () => {

    const gridCards = document.querySelectorAll(".grid-card");

    gridCards.forEach(card => {

        card.addEventListener("click", () => {

            const content = card.querySelector(".dropdown-content");
            const icon = card.querySelector(".dropdown-btn i");

            content.classList.toggle("active");

            icon.classList.toggle("fa-chevron-down");
            icon.classList.toggle("fa-chevron-up");

        });

    });

});

const modal = document.querySelector(".image-modal");
const modalImage = modal.querySelector("img");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentImages = [];
let currentIndex = 0;

function openModal(imagesArray, index){

    currentImages = imagesArray;
    currentIndex = index;

    modal.classList.add("active");
    modalImage.src = currentImages[currentIndex].src;

}

function updateImage(){

    modalImage.src = currentImages[currentIndex].src;

}

const imageGroups = document.querySelectorAll(".experience-images");

imageGroups.forEach(group => {

    const visibleImages = group.querySelectorAll(":scope > img");

    visibleImages.forEach((image, index) => {

        image.addEventListener("click", (e) => {

            e.stopPropagation();

            openModal([...visibleImages], index);

        });

    });

});

const moreImagesContainers = document.querySelectorAll(".more-images");

moreImagesContainers.forEach(container => {

    const hiddenImages = container.querySelectorAll(".hidden-images img");

    container.addEventListener("click", (e) => {

        e.stopPropagation();

        openModal([...hiddenImages], 0);

    });

});

rightArrow.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex++;

    if(currentIndex >= currentImages.length){
        currentIndex = 0;
    }

    updateImage();

});

leftArrow.addEventListener("click", (e) => {

    e.stopPropagation();

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = currentImages.length - 1;
    }

    updateImage();

});

modal.addEventListener("click", () => {

    modal.classList.remove("active");

});

/* Project Modal */

const projectModal = document.querySelector(".project-modal");
const projectModalImage = document.querySelector(".project-carousel-image");

const projectLeftArrow = document.querySelector(".project-arrow.left");
const projectRightArrow = document.querySelector(".project-arrow.right");

const projectCloseBtn = document.querySelector(".project-close-btn");

const projectTitle = document.querySelector(".project-title");
const projectDescription = document.querySelector(".project-description");

let currentProjectImages = [];
let currentProjectIndex = 0;

let projectAutoSlide;

function updateProjectImage(){

    projectModalImage.src = currentProjectImages[currentProjectIndex];

}

function startProjectAutoSlide(){

    clearInterval(projectAutoSlide);

    projectAutoSlide = setInterval(() => {

        currentProjectIndex++;

        if(currentProjectIndex >= currentProjectImages.length){
            currentProjectIndex = 0;
        }

        updateProjectImage();

    }, 3000);

}

function openProjectModal(projectCard){

    const title = projectCard.querySelector("h3").textContent;

    const description = projectCard.querySelector(".project-description-data").innerHTML;

    const images = projectCard.querySelectorAll(".project-images-data img");

    currentProjectImages = [...images].map(image => image.src);

    currentProjectIndex = 0;

    projectModalImage.src = currentProjectImages[currentProjectIndex];

    projectTitle.textContent = title;

    projectDescription.innerHTML = description;

    startProjectAutoSlide();

    projectModal.classList.add("active");

}

const projectButtons = document.querySelectorAll(".project-card .btn");

projectButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        e.stopPropagation();

        const projectCard = button.closest(".project-card");

        openProjectModal(projectCard);

    });

});

projectRightArrow.addEventListener("click", (e) => {

    e.stopPropagation();

    currentProjectIndex++;

    if(currentProjectIndex >= currentProjectImages.length){
        currentProjectIndex = 0;
    }

    updateProjectImage();

    startProjectAutoSlide();

});

projectLeftArrow.addEventListener("click", (e) => {

    e.stopPropagation();

    currentProjectIndex--;

    if(currentProjectIndex < 0){
        currentProjectIndex = currentProjectImages.length - 1;
    }

    updateProjectImage();

    startProjectAutoSlide();

});

projectCloseBtn.addEventListener("click", () => {

    clearInterval(projectAutoSlide);

    projectModal.classList.remove("active");

});

projectModal.addEventListener("click", () => {

    clearInterval(projectAutoSlide);

    projectModal.classList.remove("active");

});

document.querySelector(".project-modal-content").addEventListener("click", (e) => {

    e.stopPropagation();

});




const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});