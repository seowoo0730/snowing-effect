function createSnow() {
  const snow = document.createElement(`div`);
  snow.classList.add(`snow`);
  snow.style.marginLeft = randomPosition() + `px`;
  document.body.appendChild(snow);
}

function randomPosition() {
  return Math.floor(Math.random() * window.innerWidth);
}

for (let i = 0; i < 300; i++) {
  createSnow();
}
