$('.top-slide').slick({
    autoplay:true,
    infinite: true,
    speed: 4000,
    arrows: false,
    dots: false,
    fade: true,
    autoplaySpeed: 500 
});


const imge = document.querySelectorAll("imge");
const navContainer = document.querySelector(".nav-container");
const totalImages = images.length;
let imageIndex = 0;
let interval;

for (let i = 0; i < totalImages; i++) {
  const button = document.createElement("button");
  button.classList.add("nav-btn");
  navContainer.appendChild(button);
}

const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    imageIndex = index;
    updateSlider();
    resetInterval();
  });
});

function updateSlider() {
  imge.forEach((imge) => {
    imge.classList.remove("imge-active");
  });
  buttons.forEach((button) => {
    button.classList.remove("btn-active");
  });
  imge[imageIndex].classList.add("imge-active");
  buttons[imageIndex].classList.add("btn-active");
}

function nextImage() {
  imageIndex++;
  if (imageIndex > totalImages - 1) {
    imageIndex = 0;
  }
  updateSlider();
}

function autoPlay() {
  interval = setInterval(nextImage, 3000);
}

function resetInterval() {
  clearInterval(interval);
  autoPlay();
}

updateSlider();
autoPlay();

function btn() {
    alert ("予約サイトに移動します。");
  }
    
