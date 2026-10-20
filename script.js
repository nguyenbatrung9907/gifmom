"use strict";

const giftJourney = document.querySelector("#giftJourney");
const welcomeScreen = document.querySelector("#welcomeScreen");
const giftButton = document.querySelector("#openGiftButton");
const bouquetFlowers = document.querySelector("#bouquetFlowers");
const bouquetScene = document.querySelector("#bouquetScene");
const floatingPetals = document.querySelector("#floatingPetals");
const bouquetSparkles = document.querySelector(".bouquet-sparkles");
const galaxyAtmosphere = document.querySelector("#galaxyAtmosphere");
const albumGrid = document.querySelector("#albumGrid");
const photoViewer = document.querySelector("#photoViewer");
const photoViewerImage = document.querySelector("#photoViewerImage");
const photoViewerCaption = document.querySelector("#photoViewerCaption");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const tulipLayout = [
  { left: 17, top: 31, scale: 0.76, tilt: -10, sway: 4.8, delay: 0.4, stem: -7, leaf: -36 },
  { left: 27, top: 20, scale: 0.88, tilt: -7, sway: 5.3, delay: 0.9, stem: -5, leaf: 35 },
  { left: 36, top: 29, scale: 0.83, tilt: 7, sway: 4.6, delay: 0.1, stem: -3, leaf: -30 },
  { left: 45, top: 16, scale: 0.97, tilt: -4, sway: 5.1, delay: 0.7, stem: -1, leaf: 37 },
  { left: 54, top: 24, scale: 0.91, tilt: 5, sway: 4.9, delay: 0.3, stem: 2, leaf: -34 },
  { left: 64, top: 16, scale: 0.96, tilt: 8, sway: 5.4, delay: 1.1, stem: 4, leaf: 36 },
  { left: 74, top: 27, scale: 0.81, tilt: -2, sway: 4.7, delay: 0.6, stem: 6, leaf: -32 },
  { left: 83, top: 22, scale: 0.75, tilt: 11, sway: 5.2, delay: 0.2, stem: 8, leaf: 31 },
  { left: 32, top: 39, scale: 0.7, tilt: -6, sway: 4.5, delay: 1.4, stem: -4, leaf: -28 },
  { left: 50, top: 34, scale: 0.79, tilt: 3, sway: 5.5, delay: 0.8, stem: 0, leaf: 34 },
  { left: 69, top: 38, scale: 0.71, tilt: 5, sway: 4.9, delay: 1.2, stem: 5, leaf: -30 },
];

const familyPhotos = [
  {
    src: "anh_me/me.jpg",
    caption: "Người phụ nữ tuyệt vời nhất của con",
    alt: "Ảnh mẹ",
    position: "center",
  },
  {
    src: "anh_me/me2.jpg",
    caption: "Nụ cười của mẹ",
    alt: "Nụ cười của mẹ",
    position: "center",
  },
  {
    src: "anh_me/me3.jpg",
    caption: "Những ngày thật bình yên",
    alt: "Ảnh gia đình",
    position: "center",
  },
  {
    src: "anh_me/me4.jpg",
    caption: "Gia đình mình",
    alt: "Khoảnh khắc gia đình",
    position: "center",
  },
  {
    src: "anh_me/me5.jpg",
    caption: "Một khoảnh khắc đáng nhớ",
    alt: "Một khoảnh khắc đáng nhớ cùng mẹ",
    position: "center",
  },
  {
    src: "anh_me/me6.jpg",
    caption: "Con luôn trân trọng những điều này",
    alt: "Kỷ niệm gia đình",
    position: "center",
  },
];

function buildBouquet() {
  tulipLayout.forEach((position, index) => {
    const tulip = document.createElement("div");
    tulip.className = "tulip";
    tulip.style.setProperty("--left", `${position.left}%`);
    tulip.style.setProperty("--top", `${position.top}%`);
    tulip.style.setProperty("--scale", position.scale);
    tulip.style.setProperty("--tilt", `${position.tilt}deg`);
    tulip.style.setProperty("--stem-tilt", `${position.stem}deg`);
    tulip.style.setProperty("--leaf-angle", `${position.leaf}deg`);
    tulip.style.setProperty("--leaf-top", `${100 + (index % 3) * 14}px`);
    tulip.style.setProperty("--sway-time", `${position.sway}s`);
    tulip.style.setProperty("--sway-delay", `${position.delay}s`);

    const stem = document.createElement("span");
    stem.className = "tulip__stem";

    const leaf = document.createElement("span");
    leaf.className = "tulip__leaf";

    const secondLeaf = document.createElement("span");
    secondLeaf.className = "tulip__leaf tulip__leaf--second";

    const head = document.createElement("span");
    head.className = "tulip__head";
    [
      "back-left",
      "back-right",
      "middle",
      "front-left",
      "front-right",
    ].forEach((petalPosition) => {
      const petal = document.createElement("span");
      petal.className = `tulip__petal tulip__petal--${petalPosition}`;
      head.appendChild(petal);
    });

    const calyx = document.createElement("span");
    calyx.className = "tulip__calyx";
    head.appendChild(calyx);
    tulip.append(stem, leaf, secondLeaf, head);
    bouquetFlowers.appendChild(tulip);
  });
}

function addAtmosphere() {
  for (let index = 0; index < 46; index += 1) {
    const star = document.createElement("span");
    star.className = "galaxy-star";
    star.style.setProperty("--x", `${Math.random() * 100}%`);
    star.style.setProperty("--y", `${Math.random() * 100}%`);
    star.style.setProperty("--size", `${1.5 + Math.random() * 2.5}px`);
    star.style.setProperty("--delay", `${Math.random() * 6}s`);
    star.style.setProperty("--duration", `${3.5 + Math.random() * 4}s`);
    star.style.setProperty(
      "--star-glow",
      index % 3 === 0 ? "#f1badcaa" : "#c8bbffaa",
    );
    galaxyAtmosphere.appendChild(star);
  }

  for (let index = 0; index < 14; index += 1) {
    const petal = document.createElement("span");
    const duration = 14 + Math.random() * 10;
    petal.className = "galaxy-petal";
    petal.style.setProperty("--x", `${Math.random() * 100}%`);
    petal.style.setProperty("--size", `${7 + Math.random() * 7}px`);
    petal.style.setProperty("--duration", `${duration}s`);
    petal.style.setProperty("--delay", `${-Math.random() * duration}s`);
    petal.style.setProperty("--drift", `${-70 + Math.random() * 140}px`);
    petal.style.setProperty("--rotation", `${180 + Math.random() * 420}deg`);
    petal.style.setProperty("--petal-opacity", `${0.22 + Math.random() * 0.12}`);
    galaxyAtmosphere.appendChild(petal);
  }

  for (let index = 0; index < 26; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "scene-sparkle";
    sparkle.style.setProperty("--x", `${Math.random() * 100}%`);
    sparkle.style.setProperty("--y", `${Math.random() * 100}%`);
    sparkle.style.setProperty("--size", `${2 + Math.random() * 4}px`);
    sparkle.style.setProperty("--delay", `${Math.random() * 4}s`);
    sparkle.style.setProperty("--duration", `${2.4 + Math.random() * 3}s`);
    bouquetSparkles.appendChild(sparkle);
  }

  for (let index = 0; index < 12; index += 1) {
    const petal = document.createElement("span");
    petal.className = "floating-petal";
    petal.style.setProperty("--x", `${8 + Math.random() * 84}%`);
    petal.style.setProperty("--y", `${23 + Math.random() * 63}%`);
    petal.style.setProperty("--width", `${8 + Math.random() * 9}px`);
    petal.style.setProperty("--drift", `${-36 + Math.random() * 72}px`);
    petal.style.setProperty("--delay", `${Math.random() * 5}s`);
    petal.style.setProperty("--duration", `${4.5 + Math.random() * 4}s`);
    floatingPetals.appendChild(petal);
  }

  const welcomeSparkles = document.querySelector(".welcome-sparkles");
  const endingPetals = document.querySelector(".ending-petals");
  for (let index = 0; index < 18; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "welcome-sparkle";
    sparkle.style.setProperty("--x", `${Math.random() * 100}%`);
    sparkle.style.setProperty("--y", `${Math.random() * 100}%`);
    sparkle.style.setProperty("--size", `${2 + Math.random() * 4}px`);
    sparkle.style.setProperty("--delay", `${Math.random() * 5}s`);
    sparkle.style.setProperty("--duration", `${2.5 + Math.random() * 3}s`);
    welcomeSparkles.appendChild(sparkle);

    const petal = document.createElement("span");
    petal.className = "end-petal";
    petal.textContent = index % 2 === 0 ? "✿" : "❀";
    petal.style.setProperty("--x", `${Math.random() * 100}%`);
    petal.style.setProperty("--delay", `${Math.random() * 9}s`);
    petal.style.setProperty("--duration", `${9 + Math.random() * 8}s`);
    petal.style.setProperty("--drift", `${-60 + Math.random() * 120}px`);
    endingPetals.appendChild(petal);
  }
}

function buildAlbum() {
  familyPhotos.forEach((photo) => {
    const figure = document.createElement("figure");
    figure.className = "album-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "album-card__image-wrap";

    const placeholder = document.createElement("span");
    placeholder.className = "album-card__placeholder";
    placeholder.innerHTML =
      '<span class="album-card__placeholder-icon" aria-hidden="true">📷</span>' +
      '<span class="album-card__placeholder-text"></span>';
    placeholder.querySelector(".album-card__placeholder-text").textContent =
      `Thêm ảnh của mẹ/gia đình vào ${photo.src}`;
    imageWrap.appendChild(placeholder);

    const image = document.createElement("img");
    image.className = "album-card__image";
    image.src = photo.src;
    image.alt = photo.alt;
    image.style.setProperty("--image-position", photo.position);
    image.hidden = true;
    image.addEventListener("load", () => {
      image.hidden = false;
      placeholder.hidden = true;
      openButton.disabled = false;
    });

    const openButton = document.createElement("button");
    openButton.className = "album-card__open";
    openButton.type = "button";
    openButton.disabled = true;
    openButton.setAttribute("aria-label", `Xem ảnh: ${photo.caption}`);
    openButton.addEventListener("click", () => showPhoto(photo, image));
    image.addEventListener("error", () => {
      image.hidden = true;
      placeholder.hidden = false;
      openButton.disabled = true;
    });

    const caption = document.createElement("figcaption");
    caption.textContent = photo.caption;

    imageWrap.append(image, openButton);
    figure.append(imageWrap, caption);
    albumGrid.appendChild(figure);
  });
}

function showPhoto(photo, image) {
  if (typeof photoViewer.showModal !== "function" || image.hidden) return;
  photoViewerImage.src = photo.src;
  photoViewerImage.alt = photo.alt;
  photoViewerImage.style.objectPosition = photo.position;
  photoViewerCaption.textContent = photo.caption;
  photoViewer.showModal();
  document.querySelector("#closePhotoViewer").focus();
}

function closePhotoViewer() {
  if (photoViewer.open) photoViewer.close();
}

function getActiveScreen() {
  return giftJourney.querySelector(".screen.is-active");
}

function showScreen(screenId) {
  const nextScreen = document.getElementById(screenId);
  const currentScreen = getActiveScreen();
  if (!nextScreen || nextScreen === currentScreen || photoViewer.open) return;

  nextScreen.hidden = false;
  nextScreen.inert = false;
  nextScreen.setAttribute("aria-hidden", "false");
  nextScreen.classList.remove("is-leaving");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => nextScreen.classList.add("is-active"));
  });

  if (currentScreen) {
    currentScreen.classList.remove("is-active");
    currentScreen.classList.add("is-leaving");
    currentScreen.inert = true;
    currentScreen.setAttribute("aria-hidden", "true");
    window.setTimeout(
      () => {
        if (!currentScreen.classList.contains("is-active")) {
          currentScreen.hidden = true;
          currentScreen.classList.remove("is-leaving");
        }
      },
      reducedMotionQuery.matches ? 20 : 580,
    );
  }

  if (screenId === "letterScreen") {
    document.querySelector("#letterCopy").classList.add("is-revealed");
  }
  window.scrollTo({ top: 0, behavior: reducedMotionQuery.matches ? "instant" : "smooth" });
  nextScreen.scrollTo({
    top: 0,
    behavior: reducedMotionQuery.matches ? "instant" : "smooth",
  });
  const heading = nextScreen.querySelector("h1, h2");
  if (heading) {
    window.setTimeout(
      () => heading.focus({ preventScroll: true }),
      reducedMotionQuery.matches ? 20 : 120,
    );
  }
}

function playInteractionEffect(target) {
  if (reducedMotionQuery.matches) return;

  const bounds = target.getBoundingClientRect();
  const originX = bounds.left + bounds.width / 2;
  const originY = bounds.top + bounds.height / 2;
  const colors = ["#d66f96", "#e4a5ba", "#c792a8", "#fff"];

  for (let index = 0; index < 6; index += 1) {
    const sparkle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 6;
    const distance = 24 + Math.random() * 22;
    sparkle.className = "interaction-glow";
    sparkle.textContent = index % 2 === 0 ? "✦" : "·";
    sparkle.style.left = `${originX}px`;
    sparkle.style.top = `${originY}px`;
    sparkle.style.color = colors[index % colors.length];
    sparkle.style.setProperty("--glow-x", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--glow-y", `${Math.sin(angle) * distance}px`);
    document.body.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove(), {
      once: true,
    });
  }
}

let bouquetEffectTimeout;
let lastPageSparkleTime = 0;
let bouquetPointerFrame = 0;

function releaseBouquetPetals(clientX, clientY) {
  if (reducedMotionQuery.matches) return;

  const bounds = bouquetScene.getBoundingClientRect();
  const originX = ((clientX - bounds.left) / bounds.width) * 100;
  const originY = ((clientY - bounds.top) / bounds.height) * 100;
  bouquetScene.classList.add("is-interacting");
  window.clearTimeout(bouquetEffectTimeout);
  bouquetEffectTimeout = window.setTimeout(
    () => bouquetScene.classList.remove("is-interacting"),
    900,
  );

  for (let index = 0; index < 7; index += 1) {
    const petal = document.createElement("span");
    petal.className = "bouquet-interaction-petal";
    petal.style.setProperty("--petal-x", `${originX + (Math.random() - 0.5) * 5}%`);
    petal.style.setProperty("--petal-y", `${originY + (Math.random() - 0.5) * 5}%`);
    petal.style.setProperty("--petal-size", `${8 + Math.random() * 7}px`);
    petal.style.setProperty("--petal-dx", `${-70 + Math.random() * 140}px`);
    petal.style.setProperty("--petal-dy", `${-90 - Math.random() * 80}px`);
    bouquetScene.appendChild(petal);
    petal.addEventListener("animationend", () => petal.remove(), { once: true });
  }
}

function addPageInteractionSparkles(clientX, clientY) {
  if (reducedMotionQuery.matches || performance.now() - lastPageSparkleTime < 100) {
    return;
  }
  lastPageSparkleTime = performance.now();

  const colors = ["#d66f96", "#e4a5ba", "#c792a8", "#fff"];
  for (let index = 0; index < 3; index += 1) {
    const sparkle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 3;
    const distance = 15 + Math.random() * 16;
    sparkle.className = "page-interaction-spark";
    sparkle.textContent = index === 1 ? "✧" : "✦";
    sparkle.style.left = `${clientX}px`;
    sparkle.style.top = `${clientY}px`;
    sparkle.style.setProperty("--spark-color", colors[index]);
    sparkle.style.setProperty("--spark-size", `${10 + Math.random() * 7}px`);
    sparkle.style.setProperty("--spark-x", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--spark-y", `${Math.sin(angle) * distance}px`);
    document.body.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove(), {
      once: true,
    });
  }
}

bouquetScene.addEventListener("pointermove", (event) => {
  if (event.pointerType !== "mouse" || reducedMotionQuery.matches) return;
  if (bouquetPointerFrame) cancelAnimationFrame(bouquetPointerFrame);

  bouquetPointerFrame = requestAnimationFrame(() => {
    const bounds = bouquetScene.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    bouquetFlowers.style.setProperty("--pointer-y", `${horizontal * 5}deg`);
    bouquetFlowers.style.setProperty("--pointer-x", `${vertical * -4}deg`);
  });
});

bouquetScene.addEventListener("pointerleave", () => {
  bouquetFlowers.style.setProperty("--pointer-x", "0deg");
  bouquetFlowers.style.setProperty("--pointer-y", "0deg");
});

bouquetScene.addEventListener("pointerdown", (event) => {
  releaseBouquetPetals(event.clientX, event.clientY);
});

document.addEventListener("pointerdown", (event) => {
  if (event.target.closest("#photoViewer")) return;
  addPageInteractionSparkles(event.clientX, event.clientY);
});

giftButton.addEventListener("click", () => {
  if (giftButton.disabled) return;
  giftButton.disabled = true;
  welcomeScreen.classList.add("is-gifting");
  const delay = reducedMotionQuery.matches ? 80 : 1050;
  window.setTimeout(() => {
    welcomeScreen.classList.remove("is-gifting");
    giftButton.disabled = false;
    showScreen("bouquetScreen");
  }, delay);
});

giftJourney.addEventListener("click", (event) => {
  const interactive = event.target.closest(
    ".button, .album-card__open, .welcome-card",
  );
  if (interactive && !interactive.disabled) {
    playInteractionEffect(interactive);
  }

  const nextButton = event.target.closest("[data-next]");
  const previousButton = event.target.closest("[data-previous]");
  const navigationButton = nextButton || previousButton;
  if (!navigationButton || navigationButton.disabled) return;

  const targetScreen = nextButton
    ? navigationButton.dataset.next
    : navigationButton.dataset.previous;
  showScreen(targetScreen);
});

document.querySelector("#closePhotoViewer").addEventListener("click", closePhotoViewer);
document.querySelector("#closePhotoViewer").addEventListener("click", (event) => {
  playInteractionEffect(event.currentTarget);
});
photoViewer.addEventListener("click", (event) => {
  if (event.target === photoViewer) closePhotoViewer();
});
photoViewer.addEventListener("close", () => {
  photoViewerImage.removeAttribute("src");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && photoViewer.open) closePhotoViewer();
});

buildBouquet();
addAtmosphere();
buildAlbum();
