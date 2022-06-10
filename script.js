const container = document.querySelector(".partners__row");
const containerSecond = document.querySelector(".partners__row__2");
const cards = document.querySelector(".partners__row__inner");
const cardsSecond = document.querySelector(".partners__row__inner__2");

/* keep track of user's mouse down and up */
let isPressedDown = false;
let isPressedDownSecond = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;
let cursorXSpaceSecond;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

containerSecond.addEventListener("mousedown", (e) => {
  isPressedDownSecond = true;
  cursorXSpaceSecond = e.offsetX - cardsSecond.offsetLeft;
  containerSecond.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

containerSecond.addEventListener("mouseup", () => {
  containerSecond.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
  isPressedDownSecond = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

containerSecond.addEventListener("mousemove", (e) => {
  if (!isPressedDownSecond) return;
  e.preventDefault();
  cardsSecond.style.left = `${e.offsetX - cursorXSpaceSecond}px`;
  boundCardsSecond();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = `unset`;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}

function boundCardsSecond() {
  const container_rect_second= containerSecond.getBoundingClientRect();
  const cards_rect_second = cardsSecond.getBoundingClientRect();

  if (parseInt(cardsSecond.style.left) > 0) {
    cardsSecond.style.left = `unset`;
  } else if (cards_rect_second.right < container_rect_second.right) {
    cardsSecond.style.left = `-${cards_rect_second.width - container_rect_second.width}px`;
  }
}

const toggleButton = document.getElementsByClassName('phone__menu__button')[0]
const phoneMenu = document.getElementsByClassName('header')[0]

toggleButton.addEventListener('click', () =>{
  phoneMenu.classList.toggle('active');
})

window.addEventListener('resize', ()=> {
  cards.style.left = `unset`;
  cardsSecond.style.left = `unset`;
  if (screen.width > 768) {
    phoneMenu.classList.remove('active');
  }
}, true);