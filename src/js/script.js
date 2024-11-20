const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;

if (carousel) {
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}


document.querySelectorAll(".carousel__nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); 
    const targetId = link.getAttribute("href").substring(1); 
    const targetElement = document.getElementById(targetId);

    
    targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
