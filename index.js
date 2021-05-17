const imgSlider = document.getElementsByClassName("image-slider")[0],
  dotBox = document.querySelector(".dots-box"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  SHOWING_CLASS = "showing",
  ACTIVE_CLASS = "active",
  IMGNUMBER = 5;

// function handlePrev() {
//   // const lastImg = document.querySelector("img:last-child");
//   const currentImg = document.querySelector(`.${SHOWING_CLASS}`);
//   const firstImg = document.querySelector("img:first-child");
//   if (currentImg) {
//     currentImg.classList.remove(SHOWING_CLASS);
//     const prevImg = currentImg.previousElementSibling;
//     if (prevImg) {
//       prevImg.classList.add(SHOWING_CLASS);
//     } else {
//       firstImg.classList.add(SHOWING_CLASS);
//     }
//   } else {
//     lastImg.classList.add(SHOWING_CLASS);
//   }
// }

// function handleNext() {
//   // const firstImg = document.querySelector("img:first-child");
//   const currentImg = document.querySelector(`.${SHOWING_CLASS}`);
//   const lastImg = document.querySelector("img:last-child");
//   if (currentImg) {
//     currentImg.classList.remove(SHOWING_CLASS);
//     const nextImg = currentImg.nextElementSibling;
//     if (nextImg) {
//       nextImg.classList.add(SHOWING_CLASS);
//     } else {
//       lastImg.classList.add(SHOWING_CLASS);
//     }
//   } else {
//     firstImg.classList.add(SHOWING_CLASS);
//   }
// }

function genImage() {
  for (let i = 1; i <= IMGNUMBER; i++) {
    const image = new Image();
    image.src = `/images/${i}.jpg`;
    imgSlider.appendChild(image);
    image.classList.add("hiding");
    image.setAttribute("id", i);
    const dots = document.createElement("div");
    dots.classList.add("passive");
    dots.setAttribute("id", i);
    dotBox.appendChild(dots);
  }
  const firstImg = document.querySelector(".hiding:first-child");
  const firstDot = document.querySelector(".passive:first-child");
  firstImg.classList.add(SHOWING_CLASS);
  firstDot.classList.add(ACTIVE_CLASS);
  nextBtn.addEventListener("click", () => {
    const currentImg = document.querySelector(`.${SHOWING_CLASS}`);
    const currentDots = document.querySelector(`.${ACTIVE_CLASS}`);
    // const firstImg = document.querySelector("img:first-child");
    const lastImg = document.querySelector(".hiding:last-child");
    const lastDots = document.querySelector(".passive:last-child");
    if (currentImg) {
      currentImg.classList.remove(SHOWING_CLASS);
      currentDots.classList.remove(ACTIVE_CLASS);
      const nextImg = currentImg.nextElementSibling;
      const nextDot = currentDots.nextElementSibling;
      if (nextImg) {
        nextImg.classList.add(SHOWING_CLASS);
        nextDot.classList.add(ACTIVE_CLASS);
      } else {
        lastImg.classList.add(SHOWING_CLASS);
        lastDots.classList.add(ACTIVE_CLASS);
      }
    } else {
      firstImg.classList.add(SHOWING_CLASS);
      firstDot.classList.add(ACTIVE_CLASS);
    }
  });
  prevBtn.addEventListener("click", () => {
    const currentImg = document.querySelector(`.${SHOWING_CLASS}`);
    const currentDots = document.querySelector(`.${ACTIVE_CLASS}`);
    // const firstImg = document.querySelector("img:first-child");
    if (currentImg) {
      currentImg.classList.remove(SHOWING_CLASS);
      currentDots.classList.remove(ACTIVE_CLASS);
      const prevImg = currentImg.previousElementSibling;
      const prevDots = currentDots.previousElementSibling;
      if (prevImg) {
        prevImg.classList.add(SHOWING_CLASS);
        prevDots.classList.add(ACTIVE_CLASS);
      } else {
        firstImg.classList.add(SHOWING_CLASS);
        firstDot.classList.add(ACTIVE_CLASS);
      }
    } else {
      lastImg.classList.add(SHOWING_CLASS);
      lastDots.classList.add(ACTIVE_CLASS);
    }
  });
  const navDot = document.getElementsByClassName("passive");
  if (navDot) {
    Array.from(navDot).forEach((dot) =>
      dot.addEventListener("click", (event) => {
        const idNumber = event.target.id;
        const currentImg = document.querySelector(`.${SHOWING_CLASS}`);
        const currentDots = document.querySelector(`.${ACTIVE_CLASS}`);
        const selectedDot = document.querySelector(
          `.passive:nth-child(${idNumber})`
        );
        const selectedImg = document.querySelector(
          `.hiding:nth-child(${idNumber})`
        );
        currentDots.classList.remove(ACTIVE_CLASS);
        selectedDot.classList.add(ACTIVE_CLASS);
        currentImg.classList.remove(SHOWING_CLASS);
        selectedImg.classList.add(SHOWING_CLASS);
      })
    );
  }
}

function init() {
  genImage();
}

init();
