const imageContainerE1 = document.querySelectorAll(".image-container");

const prevE1 = document.getElementById("prev");
const nextE1 = document.getElementById("next");

let x = 0;

prevE1.addEventListener("click", () => {
  x = x + 45;
  updateGallery();
});

nextE1.addEventListener("click", () => {
  x = x - 45;
  updateGallery();
});

function updateGallery() {
  imageContainerE1.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
